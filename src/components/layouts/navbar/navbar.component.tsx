import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { useRouter } from 'next/router';
import { BsGithub, BsDiscord } from 'react-icons/bs';

import HafezTypography from '@/../public/static/icons/hafez-typography.png';
import HafezTypography2 from '@/../public/static/icons/hafez-typography-2.png';

import styles from './navbar.module.scss';

const Navbar = () =>
{
    const { pathname } = useRouter();

    return (
        <nav className={styles.nav} data-secondery={ pathname !== '/' }>
            <Link href='/' className={styles.navLogo}>
                <Image
                    src={ pathname !== '/' ? HafezTypography : HafezTypography2 }
                    alt='hafez-hub logo'
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes={'100'}
                />
            </Link>

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
                    <Link className={styles.navItemLinksLink} href='/documents'>
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
