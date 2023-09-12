import Link from 'next/link';
import Image from 'next/image';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { BsGithub, BsDiscord, BsList } from 'react-icons/bs';

import HafezTypography from '@/../public/static/icons/hafez-typography.png';
import HafezTypography2 from '@/../public/static/icons/hafez-typography-2.png';

import styles from '@/components/layouts/navbar/navbar.module.scss';

const Navbar = () =>
{
    const { pathname } = useRouter();

    const [open, setOpen] = useState<boolean>(false);

    return (
        <nav className={classnames(styles.nav, { [styles.navOpen]: open })} data-secondery={ pathname !== '/' }>
            <Link href='/' className={styles.navLogo}>
                <Image
                    src={ pathname !== '/' ? HafezTypography : HafezTypography2 }
                    alt='hafez.live logo'
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes={'100'}
                />
            </Link>

            <i onClick={() => setOpen(!open)}>
                <BsList />
            </i>

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
                    <Link className={styles.navItemSocialLink} href='https://github.com/hafez-live'>
                        <BsGithub />
                    </Link>
                </li>
                <li className={styles.navItemSocialList}>
                    <Link className={styles.navItemSocialLink} href='https://discord.gg/7pAr9NPD7X'>
                        <BsDiscord />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
