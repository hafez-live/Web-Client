import { BsDiscord, BsExclamationTriangleFill, BsGithub, BsInstagram } from 'react-icons/bs';

import styles from './footer.module.scss';

function Footer()
{
    return (
        <footer className={styles.footer}>
            <ul className={styles.footerMenu}>
                <li className={styles.footerIMenuItem}>
                    <a className={styles.footerMenuItemLink} href='/'>
                        Home
                    </a>
                </li>
                <li className={styles.footerIMenuItem}>
                    <a className={styles.footerMenuItemLink} href='/'>
                        Dictionary
                    </a>
                </li>
                <li className={styles.footerIMenuItem}>
                    <a className={styles.footerMenuItemLink} href='/'>
                        Flash Cards
                    </a>
                </li>
                <li className={styles.footerIMenuItem}>
                    <a className={styles.footerMenuItemLink} href='/'>
                        About
                    </a>
                </li>
            </ul>
            <hr />
            <ul className={styles.footerMain}>
                <span className={styles.footerMainErrorReport}>
                    <BsExclamationTriangleFill />
                    Error Report
                </span>
                <span className={styles.footerMainCopyright}>
                    German Word © 2022
                </span>
                <ul className={styles.footerMainSocialList}>
                    <li className={styles.footerMainSocialItem}>
                        <a className={styles.footerMainSocialItemLink} href='https://www.instagram.com/german-word'>
                            <BsInstagram size={15} />
                        </a>
                    </li>
                    <li className={styles.footerMainSocialItem}>
                        <a className={styles.footerMainSocialItemLink} href='https://github.com/intelligentquantum/german-word.ir'>
                            <BsGithub size={15} />
                        </a>
                    </li>
                    <li className={styles.footerMainSocialItem}>
                        <a className={styles.footerMainSocialItemLink} href='https://discord.gg/V87k9kTzRg'>
                            <BsDiscord size={15} />
                        </a>
                    </li>
                </ul>
            </ul>
        </footer>
    );
}

export default Footer;
