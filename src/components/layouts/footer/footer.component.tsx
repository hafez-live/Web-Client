import React from 'react';
import Link from 'next/link';

import styles from './footer.module.scss';

const Footer = () =>
{
    return (
        <>
            <svg className={styles.footerWave} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                <path fillOpacity='1' d='M0,256L120,261.3C240,267,480,277,720,266.7C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'/>
            </svg>
            <footer className={styles.footer}>
                <ul className={styles.footerMain}>
                    <ul className={styles.footerMenu}>
                        <li className={styles.footerMenuItem}>
                            <Link href='/'>
                                صفحه‌اصلی
                            </Link>
                        </li>
                        <li className={styles.footerMenuItem}>
                            <Link href='/blogs'>
                                خواندنی‌ها
                            </Link>
                        </li>
                        <li className={styles.footerMenuItem}>
                            <Link href='/poems'>
                                غزلیات حافظ
                            </Link>
                        </li>
                        <li className={styles.footerMenuItem}>
                            <Link href='/documents'>
                                وب‌سرویس
                            </Link>
                        </li>
                    </ul>
                    <span className={styles.footerMainCopyright}>
                        Copyright © 2023 Hafez.Live
                    </span>
                </ul>
            </footer>
        </>
    );
};

export default Footer;
