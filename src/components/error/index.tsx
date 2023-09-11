import React from 'react';
import Link from 'next/link';

import styles from './error.module.scss';

const Error = ({ title, message }: any) =>
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
