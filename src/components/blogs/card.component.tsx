import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/pages/blogs.module.scss';

import Blog1 from '../../../public/static/images/blogs/blog-1.jpg';

const BlogCard = () =>
{
    return (
        <Link href='/' className={styles.blogsCard}>
            <span className={styles.blogsCardImage}>
                <Image
                    src={ Blog1 }
                    alt={ 'Blog' }
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes={'100'}
                />
            </span>
            <span className={styles.blogsCardAuthor}>
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
        </Link>
    );
};

export default BlogCard;
