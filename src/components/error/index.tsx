import React from 'react';
import Link from 'next/link';

import styles from '@/components/error/error.module.scss';

interface ErrorTypes
{
    title?: string | number,
    message?: string | number
}

const Error = ({ title, message }: ErrorTypes) =>
{
    return (
        <section className={styles.error}>
            {
                title
                    ?
                    <h2>
                        { title }
                    </h2>
                    :
                    null
            }
            {
                message
                    ?
                    <p>
                        { message }
                    </p>
                    :
                    null
            }
            <Link href='/'>
                برگشت به صفحه اصلی
            </Link>
        </section>
    );
};

export default Error;
