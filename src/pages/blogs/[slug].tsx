import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ReactHtmlParser from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { BsCalendarFill, BsClockFill, BsEyeFill } from 'react-icons/bs';

import Error from '@/components/error';
import BlogCard from '@/components/blogs/card.component';
import Main from '@/components/layouts/main/main.component';

import styles from '@/styles/pages/blogs.module.scss';

import { getBlogs, getBlog } from '@/lib/api';

import { IBlog } from '@/interfaces/blog.types';

const Blog = () =>
{
    const { query } = useRouter();

    const [blog, setBlog] = useState<IBlog | 'loading' | 'error'>('loading');
    const [hottestBlogs, setHottestBlogs] = useState<IBlog[] | 'loading'>('loading');

    useEffect(() =>
    {
        (
            async() =>
            {
                try
                {
                    const blogsReq = await getBlogs(1, 3, 'likes', true);

                    setHottestBlogs(blogsReq.blogs);
                }
                catch (error)
                {
                    setHottestBlogs([]);
                }
            }
        )();
    }, []);

    useEffect(() =>
    {
        (
            async() =>
            {
                try
                {
                    const blogReq = await getBlog(query?.slug?.toString() as string, true);

                    setBlog(blogReq.blog);
                }
                catch (error)
                {
                    setBlog('error');
                }
            }
        )();
    }, [query]);

    return (
        <>
            <Head>
                <title>حافظ‌هاب - تمامی عزلیات و اشعار حافظ شیرازی</title>
                <meta charSet='UTF-8' />
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />
                <meta content="ie=edge" httpEquiv='X-UA-Compatible' />
            </Head>

            <Main blog>
                {
                    blog === 'loading'
                        ?
                        <></>
                        :
                        blog === 'error'
                            ?
                            <Error title='404' message='بلاگ مورد نظر پیدا نشد'/>
                            :
                            <>
                                <section className={styles.blog}>
                                    <span className={styles.blogImage}>
                                        <Image
                                            src={ `${ process.env.NEXT_PUBLIC_SERVER_IP_OR_URL }/blog/uploaded-image/${ blog.thumbnail }` }
                                            alt={ blog.slug }
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            sizes={'100'}
                                        />
                                    </span>
                                    <h1>
                                        { blog.title_fa }
                                    </h1>
                                    <div>
                                        <span className={styles.blogAuthor}>
                                            <span>
                                                <Image
                                                    src={ `${ process.env.NEXT_PUBLIC_SERVER_IP_OR_URL }/account/uploaded-image/${ blog.avatar }` }
                                                    alt={ blog.first_name + ' ' + blog.last_name }
                                                    fill
                                                    style={{ objectFit: 'cover' }}
                                                    sizes={'100'}
                                                />
                                            </span>
                                            <p>
                                                { blog.first_name + ' ' + blog.last_name }
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
                                            <span>
                                                { blog.to_read }
                                            </span>
                                            دقیقه برای خواندن
                                        </p>
                                        <p>
                                            <BsEyeFill />
                                            <span>
                                                { blog.readz }
                                            </span>
                                            بار بازید
                                        </p>
                                    </div>

                                    <article>
                                        { ReactHtmlParser(blog.content_fa) }
                                    </article>
                                </section>

                                <h2 className={styles.blogsListHeader}>
                                    خواندنی‌های مرتبط حافط‌هاب
                                </h2>
                                <section className={styles.blogsList2}>
                                    {
                                        hottestBlogs === 'loading'
                                            ?
                                            <></>
                                            :
                                            hottestBlogs.map((blog: IBlog) =>
                                                (
                                                    <BlogCard key={ blog.id + '.BLOGS.PAGE.LIST' } blog={blog}/>
                                                ))
                                    }
                                </section>
                            </>
                }
            </Main>
        </>
    );
};

export default Blog;
