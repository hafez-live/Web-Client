import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react';
import type { GetStaticProps } from 'next';
import { FaArrowLeft, FaSearch, FaBook } from 'react-icons/fa';

import PoemList from '../components/poem/list.component';
import Main from '../components/layouts/main/main.component';

import { getPoems, getBlogs } from '@/lib/api';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../styles/pages/home.module.scss';

const Home = ({ poems, blogs }: any) =>
{
    useEffect(() =>
    {
        (
            async() =>
            {
                try
                {
                    console.log(await axios.get('http://localhost:4000/poem/find-all?locale=fa&page=1&limit=10'));
                }
                catch (e)
                {
                    console.log(e);
                }
            }
        )();
    }, []);


    return (
        <>
            <Head>
                <title>وبسایت اختصاصی حافظ شیرازی معروف ترین غزل سرای ایران</title>
                <meta charSet='UTF-8' />
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />
                <meta content="ie=edge" httpEquiv='X-UA-Compatible' />
            </Head>

            <header className={styles.homeHeader}>
                <div className={styles.homeHeaderContent}>
                    <h1>اشعار و غزلیات حافظ شیرازی</h1>
                    <h2>حافظ‌هاب وبسایت اختصاصی حافظ شیرازی معروف ترین غزل سرای ایران</h2>
                    <form>
                        <input
                            type='text'
                            spellCheck={false}
                            placeholder='جستجو در بین تمامی اشعار و غزلیات حافظ'
                        />
                        <button>
                            <FaSearch />
                        </button>
                    </form>
                    <div>
                        <Link href='/poems/random'>
                            یک غزل تصادفی
                        </Link>
                        <Link href='/blogs/biography'>
                            زندگی نامه حافظ
                            <FaArrowLeft />
                        </Link>
                    </div>
                </div>
                <div>
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7"/>
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"/>
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"/>
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff"/>
                        </g>
                    </svg>
                </div>
            </header>

            <Main>
                <section className={styles.homeHeaderBoxParent}>
                    <div className={styles.homeHeaderBox}>
                        <i className={styles.homeHeaderBoxIcon}>
                            <FaBook />
                        </i>
                        <h3 className={styles.homeHeaderBoxHeader}>
                            بیش از ۱۰۰۰ اشعار و غزلیات برتر حافظ
                        </h3>
                        <p className={styles.homeHeaderBoxParagraph}>
                            شما با استفاده از سرویس‌ما اختصاصی و پرسرعت‌ حافظ شیرازی می‌توانید به تمامی اشعار ثبت شده حافظ دسترسی داشته باشید و آزادانه از آن استفاده کنید
                        </p>
                    </div>
                    <div className={styles.homeHeaderBox}>
                        <i className={styles.homeHeaderBoxIcon}>
                            <FaBook />
                        </i>
                        <h3 className={styles.homeHeaderBoxHeader}>
                            معانی تمامی کلمات و کنایه های اشعار حافظ
                        </h3>
                        <p className={styles.homeHeaderBoxParagraph}>
                            معنای دقیق و واضح کلمه به کلمه به همراه نقش ادبی آن جمع‌آوری شده از معتبرترین مرجع دستورادبی با سوریس حافظ شیرازی
                        </p>
                    </div>
                    <div className={styles.homeHeaderBox}>
                        <i className={styles.homeHeaderBoxIcon}>
                            <FaBook />
                        </i>
                        <h3 className={styles.homeHeaderBoxHeader}>
                            گرفتن فال و شرح معنای درونی غزلیات حافظ
                        </h3>
                        <p className={styles.homeHeaderBoxParagraph}>
                            معتبر ترین شرح و معنای اشعار حافظ گردآوری شده از مراجع برتر این زمینه به همراه فال اختصاصی غزل در بهترین وب‌سرویس حافظ شیرازی
                        </p>
                    </div>
                </section>

                <section className={styles.homeFeatures}>
                    <div className={styles.homeFeaturesBox}>
                        <span className={styles.homeFeaturesHeader}>
                            ۱۰۰۰+
                        </span>
                        <span className={styles.homeFeaturesParagraph}>
                            غزل ثبت شده
                        </span>
                    </div>
                    <div className={styles.homeFeaturesBox}>
                        <span className={styles.homeFeaturesHeader}>
                            ۱۰۰۰+
                        </span>
                        <span className={styles.homeFeaturesParagraph}>
                            تعبیر و فال
                        </span>
                    </div>
                    <div className={styles.homeFeaturesBox}>
                        <span className={styles.homeFeaturesHeader}>
                            ۱۰۰۰+
                        </span>
                        <span className={styles.homeFeaturesParagraph}>
                            دستورزبانی کلمات
                        </span>
                    </div>
                    <div className={styles.homeFeaturesBox}>
                        <span className={styles.homeFeaturesHeader}>
                            ۱۰۰۰+
                        </span>
                        <span className={styles.homeFeaturesParagraph}>
                            معنی واژگان
                        </span>
                    </div>
                </section>

                <section className={styles.homeAboutUs}>
                    <h6>هدف جامعه حافظ شیرازی</h6>
                    <h2>
                        <strong>هدف ما در جامعه حافظ شیرازی آشنایی مردم جهان و بزرگ داشت حافظ بزرگترین غزل سرای تاریخ است.</strong>
                        آشنایی مردم ایران و جهان با فرهنگ یک ملت پرغرور و پر آوازه در شعرسرایی.
                        حافظ نخستین شاعری است که وسعت دامنهٔ موضوعات غزل را، با حفظ زبان تغزلی آن، از عشق به اخلاق، فلسفه، عرفان، وعظ و حتی سیاست گسترانید. برای سنجش سهم حافظ در تکامل غزل، باید اثرپذیری او را از پیشینیان و هم‌روزگارانش در نظر داشت.
                        حافظ در هردو زمینهٔ غزل و مدیحه انقلابی ایجاد کرد و جایگاهی برای غزل آفرید که پیشتر به قصیده اختصاص داشت. حافظ مانند دیگر شاعران، برای بلندپایگان شیراز مدیحه می‌سرود؛ اما به جای قصیده، از غزل استفاده می‌کرد. از آنجا که غزل بسیار کوتاه‌تر است، مدیحه به یک یا دو بیت در غزل محدود می‌شد و سایر بیت‌ها دربردارندهٴ عناصر عشق و بزم‌پرستی بودند. بنابراین، استعاره‌های کام‌گرایانه به محیط واقعی پیوند زده می‌شد؛ چنان که در شعر حافظ، به تعبیر ریپکا، معشوق همان ممدوح بود.
                    </h2>
                </section>

                <section className={styles.homeBlogs}>
                    <h6>
                        <p>خواندنی‌ها</p>
                        <Link href='/blogs'>
                            مشاهده همه
                            <FaArrowLeft />
                        </Link>
                    </h6>
                    <div>
                        {
                            blogs.data.map((blog: any) =>
                                (
                                    <Link href={`/blogs/${ blog.slug }`} key={blog.slug + '.BLOG.HOME.LIST'}>
                                        <span>
                                            <Image
                                                src={ `${ process.env.NEXT_PUBLIC_SERVER_IP_OR_URL }/blog/uploaded-image/${ blog.thumbnail }` }
                                                alt={ blog.title_fa }
                                                fill
                                                sizes={'100'}
                                            />
                                        </span>
                                        <h4>
                                            { blog.title_fa }
                                        </h4>
                                        <h5>
                                            { blog.summary_fa }
                                        </h5>
                                    </Link>
                                ))
                        }
                    </div>
                </section>

                <section className={styles.homePoems}>
                    <h6>
                        <p>غزلیات حافظ</p>
                        <Link href='/poems'>
                            مشاهده همه
                            <FaArrowLeft />
                        </Link>
                    </h6>
                    <div className={styles.homePoemsList}>
                        <PoemList poems={poems.data}/>
                    </div>
                </section>

                <section className={styles.homeApi}>
                    <div className={styles.homeApiContent}>
                        <h4 className={styles.homeApiHeader}>
                            وب‌سرویس اختصاصی و پرسرعت غزلیات حافظ شیرازی
                        </h4>
                        <p className={styles.homeApiParagraph}>
                            با این وب‌سرویس شما به تمامی اشعار و غزلیات ثبت شده حافظ شیرازی، معنای کلمه به کلمه به همراه نقش دستوری آن، معنا و مفهوم غزل با فال و معنای پنهان مربوط به آن دسترسی پیدا خواهید کرد.
                        </p>
                        <span className={styles.homeApiSpan}>
                            جهت دریافت دسترسی به وب‌سوریس ایمیل خود را ثبت کنید
                        </span>
                    </div>
                    <div className={styles.homeApiSubmit}>
                        <input
                            className={styles.homeApiInput}
                            placeholder='آدرس ایمیل شما'
                            type='email'
                        />
                        <button className={styles.homeApiButton}>
                            ثبت
                        </button>
                    </div>
                </section>
            </Main>
        </>
    );
};

export const getStaticProps: GetStaticProps = async() =>
{
    let poems = { data: [] };
    let blogs = { data: [] };

    const poemsReq = await getPoems(1, 9);
    const blogsReq = await getBlogs(1, 3, 'likes');

    if (poemsReq)
        poems = { data: poemsReq.poems };

    if (blogsReq)
        blogs = { data: blogsReq.blogs };

    return {
        props: { poems, blogs },
        revalidate: 10
    };
};

export default Home;
