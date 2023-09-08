import Head from 'next/head';
import classNames from 'classnames';
import {GetStaticPaths, GetStaticProps} from 'next';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import { BsChevronLeft } from 'react-icons/bs';

import PoemCard from '@/components/poem/card.component';
import Main from '@/components/layouts/main/main.component';

import styles from '@/styles/pages/poems.module.scss';

import { getPoem, getPoems } from '@/lib/api';

import { Newline } from '@/utils/helper';

const Poem = ({ poem, poems }: any) =>
{
    const { query, push } = useRouter();

    const [item, setItem] = useState<number[]>([]);

    const handleItem = (index: number) =>
    {
        let newItem = item;

        if (newItem.includes(index))
            newItem = newItem.filter((newIndex: number) => newIndex !== index);
        else
            newItem.push(index);

        setItem([...newItem]);
    };

    useEffect(() =>
    {
        (
            async() =>
            {
                if (query.slug === 'random')
                    await push(`/poems/${ Math.floor(Math.random() * 496) }`);
            }
        )();
    }, []);

    // console.log(poem.data.content.split('\r\n').filter((item: string) => item !== ''));

    return (
        <>
            <Head>
                <title>وبسایت اختصاصی حافظ شیرازی معروف ترین غزل سرای ایران</title>
                <meta charSet='UTF-8' />
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />
                <meta content="ie=edge" httpEquiv='X-UA-Compatible' />
            </Head>

            <Main>
                {
                    query.slug === 'random'
                        ?
                        <></>
                        :
                        <>
                            <section className={styles.poemHeader}>
                                <h1>
                                    غزل شماره { poem.data.id } از دیوان غزلیات حافظ شیرازی
                                </h1>
                                <article>
                                    <Newline content={ poem.data.content.split('\r\n').filter((item: string) => item !== '').join('\n') } />
                                </article>
                                <div className={classNames(styles.poemItem, { [styles.poemItemActive]: item.includes(0) })} onClick={() => handleItem(0)}>
                                    <header>
                                        <h2>
                                            نقش دستوری تمامی کلمات غزل شماره { poem.data.id } دیوان اشعار حافظ شیرازی
                                        </h2>
                                        <i>
                                            <BsChevronLeft />
                                        </i>
                                    </header>
                                    <div>
                                        <Newline content={ poem.data.words } />
                                    </div>
                                </div>
                                <div className={classNames(styles.poemItem, { [styles.poemItemActive]: item.includes(1) })} onClick={() => handleItem(1)}>
                                    <header>
                                        <h2>
                                            معنی کامل غزل شماره { poem.data.id } دیوان اشعار حافظ شیرازی
                                        </h2>
                                        <i>
                                            <BsChevronLeft />
                                        </i>
                                    </header>
                                    <div>
                                        <Newline content={ poem.data.meaning } />
                                    </div>
                                </div>
                                <div className={classNames(styles.poemItem, { [styles.poemItemActive]: item.includes(2) })} onClick={() => handleItem(2)}>
                                    <header>
                                        <h2>
                                            شرح و تفسیر غزل شماره { poem.data.id } دیوان اشعار حافظ شیرازی
                                        </h2>
                                        <i>
                                            <BsChevronLeft />
                                        </i>
                                    </header>
                                    <div>
                                        <Newline content={ poem.data.explanation } />
                                    </div>
                                </div>
                                <div className={classNames(styles.poemItem, { [styles.poemItemActive]: item.includes(3) })} onClick={() => handleItem(3)}>
                                    <header>
                                        <h2>
                                            پند و درک مطلب غزل شماره { poem.data.id } دیوان اشعار حافظ شیرازی
                                        </h2>
                                        <i>
                                            <BsChevronLeft />
                                        </i>
                                    </header>
                                    <div>
                                        <Newline content={ poem.data.perception } />
                                    </div>
                                </div>
                            </section>

                            <h2 className={styles.poemsListHeader}>
                                از دیگر غزلیات حافظ
                            </h2>
                            <section className={styles.poemsList}>
                                {
                                    poems.data.map((poem: any) =>
                                        (
                                            <PoemCard key={ poem.id + '.POEM.SUGGEST.LIST' } poem={poem}/>
                                        ))
                                }
                            </section>
                        </>
                }
            </Main>
        </>
    );
};

export const getStaticProps: GetStaticProps = async({ params }: any) =>
{
    let poem = { };
    let poems = { data: [] };

    const poemReq = await getPoem(params.slug);
    const poemsReq = await getPoems(1, 3);

    if (poemReq)
        poem = { data: poemReq.poem };

    if (poemsReq)
        poems = { data: poemsReq.poems };

    return {
        props: { poem, poems },
        revalidate: 10
    };
};

export const getStaticPaths: GetStaticPaths = async() =>
{
    return {
        paths: Array(495).fill(0).map((item: number, index: number) => `/poems/${ index }`) || [],
        fallback: true
    };
};

export default Poem;
