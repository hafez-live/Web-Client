import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsGithub, BsDiscord } from 'react-icons/bs';

import HafezTypography from '../../../../public/static/icons/hafez-typography.png';

import styles from './navbar.module.scss';

const Navbar = () =>
{
    const { pathname } = useRouter();

    return (
        <nav className={styles.nav} data-secondery={ pathname !== '/' }>
            <div className={styles.navLogo}>
                <img src={HafezTypography.src} alt='hafez-shirazi logo' />
            </div>

            <ul className={styles.navItemLinks}>
                <li className={styles.navItemLinksList}>
                    <Link className={styles.navItemLinksLink} href='/'>
                        صفحه اصلی
                    </Link>
                </li>
                <li className={styles.navItemLinksList}>
                    <Link className={styles.navItemLinksLink} href='/'>
                        خواندنی‌ها
                    </Link>
                </li>
                <li className={styles.navItemLinksList}>
                    <Link className={styles.navItemLinksLink} href='/'>
                        غزل تصادفی
                    </Link>
                </li>
                <li className={styles.navItemLinksList}>
                    <Link className={styles.navItemLinksLink} href='/'>
                        راه های ارتباطی
                    </Link>
                </li>
                <li className={styles.navItemLinksList}>
                    <Link className={styles.navItemLinksLink} href='/api'>
                        وب سرویس
                    </Link>
                </li>
            </ul>

            <ul className={styles.navItemSocialList}>
                <li className={styles.navItemSocial}>
                    <Link className={styles.navItemSocialLink} href='https://github.com/hafez-shirazi'>
                        <BsGithub />
                    </Link>
                </li>
                <li className={styles.navItemSocialList}>
                    <Link className={styles.navItemSocialLink} href='https://discord.gg/RUrks4JqW6'>
                        <BsDiscord />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
