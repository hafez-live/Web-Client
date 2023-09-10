import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import BlogCard from '@/components/blogs/card.component';
import Main from '@/components/layouts/main/main.component';

import styles from '@/styles/pages/blogs.module.scss';

import { getBlogs } from '@/lib/api';

const Blogs = ({ blog }: any) =>
{
    const { query } = useRouter();

    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [blogs, setBlogs] = useState<any[] | 'loading'>('loading');

    useEffect(() =>
    {
        (
            async() =>
            {
                try
                {
                    const blogReq = await getBlogs(page, query?.limit?.toString() || 10, 'created_at', true);

                    if (blogs !== 'loading')
                    {
                        const newBlogs = [...blogs];

                        for (const newBlog of blogReq.blogs)
                        {
                            const xBlog = newBlogs.find(xBlog => xBlog.id === newBlog.id);

                            if (!xBlog)
                                newBlogs.push(newBlog);
                        }

                        setBlogs(newBlogs);
                    }
                    else
                        setBlogs(blogReq.blogs);

                    setHasMore(blogReq.hasMore);
                }
                catch (error)
                {
                    setBlogs([]);
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
                <Link href={ '/blogs/' + blog.data[0].slug } className={styles.blogsHeader}>
                    <span className={styles.blogsHeaderImage}>
                        <Image
                            src={ `${ process.env.NEXT_PUBLIC_SERVER_IP_OR_URL }/blog/uploaded-image/${ blog.data[0].thumbnail }` }
                            alt={ blog.data[0].slug }
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes={'100'}
                        />
                    </span>
                    <div>
                        <span className={styles.blogsHeaderAuthor}>
                            <span>
                                <Image
                                    src={ `${ process.env.NEXT_PUBLIC_SERVER_IP_OR_URL }/account/uploaded-image/${ blog.data[0].avatar }` }
                                    alt={ blog.data[0].first_name + ' ' + blog.data[0].last_name }
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes={'100'}
                                />
                            </span>
                            <p>
                                { blog.data[0].first_name + ' ' + blog.data[0].last_name }
                            </p>
                            <i>
                                ·
                            </i>
                            <p>
                                ۱ سال پیش
                            </p>
                        </span>
                        <h1>
                            { blog.data[0].title_fa }
                        </h1>
                        <p>
                            { blog.data[0].summary_fa }
                        </p>
                        <i>
                            { blog.data[0].to_read }
                            <span />
                            دقیقه برای خواندن
                        </i>
                    </div>
                </Link>

                <h2 className={styles.blogsListHeader}>
                    خواندنی‌های حافط‌هاب
                </h2>
                {
                    blogs === 'loading'
                        ?
                        <></>
                        :
                        <InfiniteScroll
                            className={styles.blogsList}
                            dataLength={ blogs.length }
                            next={() => setPage(page + 1)}
                            hasMore={ hasMore }
                            loader={<></>}
                        >
                            {
                                blogs.map((blog: any) =>
                                    (
                                        <BlogCard key={ blog.id + '.BLOGS.PAGE.LIST' } blog={blog}/>
                                    ))
                            }
                        </InfiniteScroll>
                }
            </Main>
        </>
    );
};

export const getStaticProps: GetStaticProps = async() =>
{
    let blog = { };

    const blogReq = await getBlogs(1, 1, 'likes');

    if (blogReq)
        blog = { data: blogReq.blogs };

    return {
        props: { blog },
        revalidate: 10
    };
};

export default Blogs;
