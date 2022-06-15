import Link from 'next/link';

import HafezTypography from '../../../public/static/icons/hafez-typography.png';
import { BsGithub, BsDiscord } from 'react-icons/bs';

import styles from './navbar.module.scss';

const Navbar = () =>
{
    return (
        <nav className={styles.nav}>
            <div className={styles.navLogo}>
                <img src={HafezTypography.src} alt='hafez-shirazi logo' />
            </div>

            <ul className={styles.navItemLinks}>
                <li className={styles.navItemLinksList}>
                    <Link href='/'>
                        <a className={styles.navItemLinksLink}>
                            صفحه اصلی
                        </a>
                    </Link>
                </li>
                <li className={styles.navItemLinksList}>
                    <Link href='/'>
                        <a className={styles.navItemLinksLink}>
                          مقاله ها
                        </a>
                    </Link>
                </li>
                <li className={styles.navItemLinksList}>
                    <Link href='/'>
                        <a className={styles.navItemLinksLink}>
                            ربات ها
                        </a>
                    </Link>
                </li>
                <li className={styles.navItemLinksList}>
                    <Link href='/'>
                        <a className={styles.navItemLinksLink}>
                            راه های ارتباطی
                        </a>
                    </Link>
                </li>
                <li className={styles.navItemLinksList}>
                    <Link href='/'>
                        <a className={styles.navItemLinksLink}>
                            وب سرویس
                        </a>
                    </Link>
                </li>
            </ul>

            <ul className={styles.navItemSocial}>
                <li className={styles.navItemSocialList}>
                    <a className={styles.navItemSocialLink} href='https://github.com/hafez-shirazi'>
                        <BsGithub />
                    </a>
                </li>
                <li className={styles.navItemSocialList}>
                    <a className={styles.navItemSocialLink} href='https://discord.gg/RUrks4JqW6'>
                        <BsDiscord />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
