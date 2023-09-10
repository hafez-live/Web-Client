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
                <img src={HafezTypography.src} alt='hafez-hub logo' />
            </div>

            <ul className={styles.navItemLinks}>
                <li className={styles.navItemLinksList}>
                    <Link className={styles.navItemLinksLink} href='/'>
                        صفحه اصلی
                    </Link>
                </li>

                <li className={styles.navItemLinksList}>
                    <Link className={styles.navItemLinksLink} href='/blogs'>
                        خواندنی‌ها
                    </Link>
                </li>
                <li className={styles.navItemLinksList}>
                    <Link className={styles.navItemLinksLink} href='/poems'>
                        غزلیات حافظ
                    </Link>
                </li>
                <li className={styles.navItemLinksList}>
                    <Link className={styles.navItemLinksLink} href='/contact-us'>
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
                    <Link className={styles.navItemSocialLink} href='https://github.com/hafez-hub'>
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
