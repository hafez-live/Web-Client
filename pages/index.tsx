import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import classnames from 'classnames';

import Main from '../components/layouts/main/main.component';
import Blog1 from '../public/static/images/blogs/blog-1.jpg';

import styles from '../styles/home.module.scss';
import { FaArrowLeft, FaSearch, FaBook } from 'react-icons/fa';

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
                    <h1>
                        اشعار و غزلیات حافظ شیرازی
                    </h1>
                    <h2>
                        وبسایت اختصاصی حافظ شیرازی معروف ترین غزل سرای ایران
                    </h2>
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
                    <div className='container'>
                        <div className={styles.homeHeaderBox}>
                            <i className={styles.homeHeaderBoxIcon}>
                                <FaBook />
                            </i>
                            <h2 className={styles.homeHeaderBoxParagraph}>
                                بیش از ۱۰۰۰ اشعار و غزلیات برتر حافظ
                            </h2>
                        </div>
                        <div className={styles.homeHeaderBox}>
                            <i className={styles.homeHeaderBoxIcon}>
                                <FaBook />
                            </i>
                            <h2 className={styles.homeHeaderBoxParagraph}>
                                معانی تمامی کلمات و کنایه های اشعار حافظ
                            </h2>
                        </div>
                        <div className={styles.homeHeaderBox}>
                            <i className={styles.homeHeaderBoxIcon}>
                                <FaBook />
                            </i>
                            <h2 className={styles.homeHeaderBoxParagraph}>
                                گرفتن فال و شرح معنای درونی غزلیات حافظ
                            </h2>
                        </div>
                    </div>
                </section>

                <section className={styles.homeAboutUs}>
                    <div className='container'>
                        <h3>
                            هدف جامعه حافظ شیرازی ؟!
                        </h3>
                        <h4>
                            <strong>هدف ما در جامعه حافظ شیرازی آشنایی مردم جهان و بزرگ داشت حافظ بزرگترین غزل سرای تاریخ است.</strong>
                            آشنایی مردم ایران و جهان با فرهنگ یک ملت پرغرور و پر آوازه در شعرسرایی.
                            حافظ نخستین شاعری است که وسعت دامنهٔ موضوعات غزل را، با حفظ زبان تغزلی آن، از عشق به اخلاق، فلسفه، عرفان، وعظ و حتی سیاست گسترانید. برای سنجش سهم حافظ در تکامل غزل، باید اثرپذیری او را از پیشینیان و هم‌روزگارانش در نظر داشت.
                            حافظ در هردو زمینهٔ غزل و مدیحه انقلابی ایجاد کرد و جایگاهی برای غزل آفرید که پیشتر به قصیده اختصاص داشت. حافظ مانند دیگر شاعران، برای بلندپایگان شیراز مدیحه می‌سرود؛ اما به جای قصیده، از غزل استفاده می‌کرد. از آنجا که غزل بسیار کوتاه‌تر است، مدیحه به یک یا دو بیت در غزل محدود می‌شد و سایر بیت‌ها دربردارندهٴ عناصر عشق و بزم‌پرستی بودند. بنابراین، استعاره‌های کام‌گرایانه به محیط واقعی پیوند زده می‌شد؛ چنان که در شعر حافظ، به تعبیر ریپکا، معشوق همان ممدوح بود.
                        </h4>
                    </div>
                </section>

                <section className={styles.homeBlogs}>
                    <div className='container'>
                        <a href='/blogs/'>
                            <img
                                src={Blog1.src}
                                alt='زندگی نامه حافظ شیرازی - جامعه حافظ شیرازی'
                            />
                            <h2>
                                زندگی نامه حافظ شیرازی
                            </h2>
                            <p>
                                زندگی نامه کامل شاعر و غزل سرای شیرازی خواجه شمسُ‌الدّینْ محمّدِ بن بهاءُالدّینْ محمّدْ معروف به حافظِ شیرازی
                            </p>
                        </a>
                        <a>

                        </a>
                        <a>

                        </a>
                    </div>
                </section>

                <section className={styles.homeHeaderApplication}>

                </section>
            </Main>
        </>
    )
}

export default Home;
