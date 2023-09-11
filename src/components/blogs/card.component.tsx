import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/pages/blogs.module.scss';

import { IBlog } from '@/interfaces/blog.types';

interface BlogTypes
{
    blog: IBlog
}

const BlogCard = ({ blog }: BlogTypes) =>
{
    return (
        <Link href={ '/blogs/' + blog.slug } className={styles.blogsCard}>
            <span className={styles.blogsCardImage}>
                <Image
                    src={ `${ process.env.NEXT_PUBLIC_SERVER_IP_OR_URL }/blog/uploaded-image/${ blog.thumbnail }` }
                    alt={ blog.slug }
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes={'100'}
                />
            </span>
            <span className={styles.blogsCardAuthor}>
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
                <i>
                    ·
                </i>
                <p>
                    ۱ سال پیش
                </p>
            </span>
            <h4>
                { blog.title_fa }
            </h4>
            <p>
                { blog.summary_fa }
            </p>
            <i>
                { blog.to_read }
                <span />
                دقیقه برای خواندن
            </i>
        </Link>
    );
};

export default BlogCard;
