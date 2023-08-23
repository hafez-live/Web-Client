import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next';

import Main from '../../components/layouts/main/main.component';

import Blog1 from '../../../public/static/images/blogs/blog-1.jpg';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from '../../styles/pages/blogs.module.scss';
import BlogCard from '@/components/blogs/card.component';

const Home: NextPage = () =>
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
                <header className={styles.blogsHeader}>
                    <span className={styles.blogsHeaderImage}>
                        <Image
                            src={ Blog1 }
                            alt={ 'Blog' }
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes={'100'}
                        />
                    </span>
                    <div>
                        <span className={styles.blogsHeaderAuthor}>
                            <span>
                                <Image
                                    src={ Blog1 }
                                    alt={ 'Profile' }
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes={'100'}
                                />
                            </span>
                            <p>
                                پارسا فیروزی
                            </p>
                            <i>
                                ·
                            </i>
                            <p>
                                ۱ سال پیش
                            </p>
                        </span>
                        <h1>
                            زندگی نامه حافظ شیرازی
                        </h1>
                        <p>
                            زندگی نامه و بیوگرافی کامل به همراه تمامی رویداد های زندگی شاعر و غزل سرای پرآوازه ایرانی زاده شهر شیراز با تاریخ دقیق، خواجه شمسُ‌الدّینْ محمّدِ بن بهاءُالدّینْ محمّدْ معروف به حافظِ شیرازی
                        </p>
                        <i>
                            ۴ دقیقه برای خواندن
                        </i>
                    </div>
                </header>

                <h2 className={styles.blogsListHeader}>
                    خواندنی‌های حافط‌هاب
                </h2>
                <section className={styles.blogsList}>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </section>
            </Main>
        </>
    );
};

export default Home;
