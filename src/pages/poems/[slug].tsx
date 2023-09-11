import Head from 'next/head';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { BsChevronLeft } from 'react-icons/bs';

import Error from '@/components/error';
import PoemCard from '@/components/poem/card.component';
import Main from '@/components/layouts/main/main.component';

import styles from '@/styles/pages/poems.module.scss';

import { getPoem, getPoems } from '@/lib/api';

import { Newline } from '@/utils/helper';

import { IPoem } from '@/interfaces/poem.types';

interface PoemTypes
{
    poem:
        {
            data: IPoem
        },
    poems:
        {
            data: IPoem[]
        }
}

const Poem = ({ poem, poems }: PoemTypes) =>
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

    return (
        <>
            <Head>
                <title>حافظ‌لایو - غزل شماره { poem.data.id } از دیوان غزلیات حافظ شیرازی</title>
            </Head>

            <Main>
                {
                    query.slug === 'random'
                        ?
                        <></>
                        :
                        poem?.data
                            ?
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
                                        poems.data.map((poem: IPoem) =>
                                            (
                                                <PoemCard key={ poem.id + '.POEM.SUGGEST.LIST' } poem={poem}/>
                                            ))
                                    }
                                </section>
                            </>
                            :
                            <Error title='404' message='غزل مورد نظر پیدا نشد'/>
                }
            </Main>
        </>
    );
};

export const getStaticProps: GetStaticProps = async({ params }) =>
{
    let poem = { };
    let poems = { data: [] };

    const poemReq = await getPoem(params?.slug);
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
