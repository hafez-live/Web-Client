import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import PoemCard from '@/components/poem/card.component';
import Main from '@/components/layouts/main/main.component';

import styles from '@/styles/pages/poems.module.scss';

import { Newline } from '@/utils/helper';

const Poem = () =>
{
    return (
        <>
            <Head>
                <title>وبسایت اختصاصی حافظ شیرازی معروف ترین غزل سرای ایران</title>
                <meta charSet='UTF-8' />
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />
                <meta content="ie=edge" httpEquiv='X-UA-Compatible' />
            </Head>

            <Main>
                <div className="book-wrapper">
                    <div className="book-container">
                        <section className="open-book">
                            <header>
                                <h1>
                                    دیوان اشعار حافظ شیرازی
                                </h1>
                                <h6>
                                    دیوان اشعار حافظ شیرازی
                                </h6>
                            </header>
                            <article>
                                <h2 className="chapter-title">
                                    غزل شماره 1 از دیوان اشعار حافظ شیرازی
                                </h2>
                                <div className='poem-container'>
                                    <Newline content={'خدا چو صورت ابروی دلگشای تو بست\nگشاد کار من اندر کرشمه‌های تو بست\nمرا و سرو چمن را به خاک راه نشاند\nزمانه تا قصب نرگس قبای تو بست\nز کار ما و دل غنچه صد گره بگشود\nنسیم گل چو دل اندر پی هوای تو بست\nمرا به بند تو دوران چرخ راضی کرد\nولی چه سود که سررشته در رضای تو بست\nچو نافه بر دل مسکین من گره مفکن\nکه عهد با سر زلف گره گشای تو بست\nتو خود وصال دگر بودی ای نسیم وصال\nخطا نگر که دل امید در وفای تو بست\nز دست جور تو گفتم ز شهر خواهم رفت\nبه خنده گفت که حافظ برو که پای تو بست'} />
                                </div>
                            </article>
                            <footer>
                                <ol className="page-numbers">
                                    <li>1</li>
                                    <li>2</li>
                                </ol>
                            </footer>
                        </section>

                    </div>
                </div>

                <h2 className={styles.poemsListHeader}>
                    از دیگر غزلیات حافظ
                </h2>
                <section className={styles.poemsList}>
                    <PoemCard />
                    <PoemCard />
                    <PoemCard />
                </section>
            </Main>
        </>
    );
};

export default Poem;
