import React from 'react';
import Link from 'next/link';

import styles from './poem.module.scss';

import { Newline } from '@/utils/helper';

import { IPoem } from '@/interfaces/poem.types';

interface PoemTypes
{
    poem: IPoem
}

const PoemCard = ({ poem }: PoemTypes) =>
{
    return (
        <Link href={`/poems/${ poem.id }`} className={styles.poemCard}>
            <span className={styles.poemCardHeader}>
                غزل شماره { poem.id }
            </span>
            <div className={styles.poemCardParagraphs}>
                <Newline content={poem.content.split('\r\n').slice(0, 6).filter((item: string) => item !== '').join('\n')} />
                <p>
                    { poem.content.split('\r\n').slice(6, 7).filter((item: string) => item !== '').join(' ').toString().substring(0,15) }...
                    <span>
                        ادامه غزل
                    </span>
                </p>
            </div>
        </Link>
    );
};

export default PoemCard;
