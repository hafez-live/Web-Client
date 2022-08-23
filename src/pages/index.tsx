import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import type { NextPage } from 'next';
import { Autoplay, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaSearch, FaBook } from 'react-icons/fa';

import Main from '../components/layouts/main/main.component';
import Blog1 from '../../public/static/images/blogs/blog-1.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../styles/pages/home.module.scss';

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

            <header className={styles.homeHeader}>
                <div className={styles.homeHeaderContent}>
                    <h1>اشعار و غزلیات حافظ شیرازی</h1>
                    <h2>وبسایت اختصاصی حافظ شیرازی معروف ترین غزل سرای ایران</h2>
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
                        <a href='/poems/random'>
                            یک غزل تصادفی
                        </a>
                        <a href='/biography'>
                            زندگی نامه حافظ
                            <FaArrowLeft />
                        </a>
                    </div>
                </div>
                <div>
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink"
                         viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
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
                        <i className={styles.homeHeaderBoxIcon}><FaBook /></i>
                        <h3 className={styles.homeHeaderBoxParagraph}>بیش از ۱۰۰۰ اشعار و غزلیات برتر حافظ</h3>
                    </div>
                    <div className={styles.homeHeaderBox}>
                        <i className={styles.homeHeaderBoxIcon}><FaBook /></i>
                        <h3 className={styles.homeHeaderBoxParagraph}>معانی تمامی کلمات و کنایه های اشعار حافظ</h3>
                    </div>
                    <div className={styles.homeHeaderBox}>
                        <i className={styles.homeHeaderBoxIcon}><FaBook /></i>
                        <h3 className={styles.homeHeaderBoxParagraph}>گرفتن فال و شرح معنای درونی غزلیات حافظ</h3>
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
                        <p>بلاگ ها</p>
                        <Link href='/blogs'>
                            <a>
                                مشاهده همه
                                <FaArrowLeft />
                            </a>
                        </Link>
                    </h6>
                    <div>
                        <Link href='/blogs/'>
                            <a>
                                <img
                                    src={Blog1.src}
                                    alt='زندگی نامه حافظ شیرازی - جامعه حافظ شیرازی'
                                />
                                <h4>
                                    زندگی نامه حافظ شیرازی
                                </h4>
                                <h5>
                                    زندگی نامه کامل شاعر و غزل سرای شیرازی خواجه شمسُ‌الدّینْ محمّدِ بن بهاءُالدّینْ محمّدْ معروف به حافظِ شیرازی
                                </h5>
                            </a>
                        </Link>
                        <Link href='/blogs/'>
                            <a>
                                <img
                                    src={Blog1.src}
                                    alt='زندگی نامه حافظ شیرازی - جامعه حافظ شیرازی'
                                />
                                <h4>
                                    زندگی نامه حافظ شیرازی
                                </h4>
                                <h5>
                                    زندگی نامه کامل شاعر و غزل سرای شیرازی خواجه شمسُ‌الدّینْ محمّدِ بن بهاءُالدّینْ محمّدْ معروف به حافظِ شیرازی
                                </h5>
                            </a>
                        </Link>
                        <Link href='/blogs/'>
                            <a>
                                <img
                                    src={Blog1.src}
                                    alt='زندگی نامه حافظ شیرازی - جامعه حافظ شیرازی'
                                />
                                <h4>
                                    زندگی نامه حافظ شیرازی
                                </h4>
                                <h5>
                                    زندگی نامه کامل شاعر و غزل سرای شیرازی خواجه شمسُ‌الدّینْ محمّدِ بن بهاءُالدّینْ محمّدْ معروف به حافظِ شیرازی
                                </h5>
                            </a>
                        </Link>
                    </div>
                </section>

                <section className={styles.homePoems}>
                    <h6>
                        <p>غزلیات حافظ</p>
                        <Link href='/poems'>
                            <a>
                                مشاهده همه
                                <FaArrowLeft />
                            </a>
                        </Link>
                    </h6>
                    <div className={styles.homePoemsList}>
                        <Swiper
                            dir='ltr'
                            modules={[ Keyboard, Autoplay ]}
                            keyboard={{ enabled: true }}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            spaceBetween={20}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                900: { slidesPerView: 2 },
                                1400: { slidesPerView: 3 }
                            }}
                        >
                            <SwiperSlide className={styles.homePoemsItem}>

                            </SwiperSlide>
                            <SwiperSlide className={styles.homePoemsItem}>

                            </SwiperSlide>
                            <SwiperSlide className={styles.homePoemsItem}>

                            </SwiperSlide>
                            <SwiperSlide className={styles.homePoemsItem}>

                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
            </Main>
        </>
    )
}

export default Home;