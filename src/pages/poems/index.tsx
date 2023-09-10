import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import PoemCard from '@/components/poem/card.component';
import Main from '@/components/layouts/main/main.component';

import styles from '@/styles/pages/poems.module.scss';

import { getPoem } from '@/lib/api';

import { Newline } from '@/utils/helper';
import * as process from 'process';

const Poems = ({ poem }: any) =>
{
    const { query } = useRouter();

    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [poems, setPoems] = useState<any[] | 'loading'>('loading');

    useEffect(() =>
    {
        (
            async() =>
            {
                try
                {
                    const getPoems = await axios.get(process.env.NEXT_PUBLIC_SERVER_IP_OR_URL + `/poem/find-all?locale=fa&page=${ page }&limit=${ Number(query.limit) > 0 ? Number(query.limit) : 10 }`);

                    if (poems !== 'loading')
                    {
                        const newPoems = [...poems];

                        for (const newPoem of getPoems.data.data.poems)
                        {
                            const xPoem = newPoems.find(xPoem => xPoem.id === newPoem.id);

                            if (!xPoem)
                                newPoems.push(newPoem);
                        }

                        setPoems(newPoems);
                    }
                    else
                        setPoems(getPoems.data.data.poems);

                    setHasMore(getPoems.data.data.hasMore);
                }
                catch (error)
                {
                    setPoems([]);
                }
            }
        )();
    }, [page]);

    return (
        <>
            <Head>
                <title>وبسایت اختصاصی حافظ شیرازی معروف ترین غزل سرای ایران</title>
                <meta charSet='UTF-8' />
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />
                <meta content="ie=edge" httpEquiv='X-UA-Compatible' />
            </Head>

            <Main>
                <header className={styles.poemsHeader}>
                    <h2>
                        غزل شماره { poem.data.id } حافظ شیرازی
                    </h2>
                    <div>
                        <Newline content={ poem.data.content.split('\r\n').slice(0, 12).filter((item: string) => item !== '').join('\n') } />
                        <p>
                            { poem.data.content.split('\r\n').slice(12, 13).filter((item: string) => item !== '').join(' ').toString().substring(0,15) }...
                            <Link href={`/poems/${ poem.data.id }`}>
                                ادامه غزل
                            </Link>
                        </p>
                    </div>
                </header>

                <h2 className={styles.poemsListHeader}>
                    غزلیات حافظ
                </h2>
                <section>
                    {
                        poems === 'loading'
                            ?
                            <></>
                            :
                            <InfiniteScroll
                                className={styles.poemsList}
                                dataLength={ poems.length }
                                next={() => setPage(page + 1)}
                                hasMore={ hasMore }
                                loader={<></>}
                            >
                                {
                                    poems.map((poem: any) =>
                                        (
                                            <PoemCard key={ poem.id + '.POEMS.PAGE.LIST' } poem={poem}/>
                                        ))
                                }
                            </InfiniteScroll>
                    }
                </section>
            </Main>
        </>
    );
};

export const getStaticProps: GetStaticProps = async() =>
{
    let poem = { };

    const poemReq = await getPoem(Math.floor(Math.random() * 496));

    if (poemReq)
        poem = { data: poemReq.poem };

    return {
        props: { poem },
        revalidate: 10
    };
};

export default Poems;
