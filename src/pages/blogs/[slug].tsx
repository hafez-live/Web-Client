import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ReactHtmlParser from 'html-react-parser';
import { BsCalendarFill, BsClockFill, BsEyeFill } from 'react-icons/bs';

import BlogCard from '@/components/blogs/card.component';
import Main from '@/components/layouts/main/main.component';

import Blog1 from '@/../public/static/images/blogs/blog-1.jpg';

import styles from '@/styles/pages/blogs.module.scss';

const Blog = () =>
{
    return (
        <>
            <Head>
                <title>وبسایت اختصاصی حافظ شیرازی معروف ترین غزل سرای ایران</title>
                <meta charSet='UTF-8' />
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />
                <meta content="ie=edge" httpEquiv='X-UA-Compatible' />
            </Head>

            <Main blog>
                <section className={styles.blog}>
                    <span className={styles.blogImage}>
                        <Image
                            src={ Blog1 }
                            alt={ 'Blog' }
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes={'100'}
                        />
                    </span>
                    <h1>
                        زندگی نامه حافظ شیرازی
                    </h1>
                    <div>
                        <span className={styles.blogAuthor}>
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
                        </span>
                    </div>
                    <div>
                        <p>
                            <BsCalendarFill />
                            نوشته شده در ۴ سال پیش
                        </p>
                        <p>
                            <BsClockFill />
                            ۴ دقیقه برای خواندن
                        </p>
                        <p>
                            <BsEyeFill />
                            ۱۰۰۰ بار بازید
                        </p>
                    </div>

                    <article>
                        { ReactHtmlParser('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii') }
                    </article>
                </section>

                <h2 className={styles.blogsListHeader}>
                    خواندنی‌های مرتبط حافط‌هاب
                </h2>
                <section className={styles.blogsList2}>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </section>
            </Main>
        </>
    );
};

export default Blog;
