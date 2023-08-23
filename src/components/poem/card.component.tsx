import React from 'react';
import Link from 'next/link';

import styles from './poem.module.scss';

import { Newline } from '../../utils/helper';

const PoemCard = () =>
{
    return (
        <div className={styles.poemCard}>
            <span className={styles.poemCardHeader}>
                غزل شماره ۱
            </span>
            <div className={styles.poemCardParagraphs}>
                <Newline content={'الا یا ایها الساقی ادر کاسا و ناولها\nکه عشق آسان نمود اول ولی افتاد مشکل‌ها\nبه بوی نافه‌ای کاخر صبا زان طره بگشاید\nز تاب جعد مشکینش چه خون افتاد در دل‌ها'} />
                <p>
                    سلام حافظ
                    <Link href=''>
                        ادامه...
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default PoemCard;
