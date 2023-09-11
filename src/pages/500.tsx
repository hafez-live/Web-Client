import React from 'react';
import Head from 'next/head';

import Error from '@/components/error';
import Main from '@/components/layouts/main/main.component';

const Error500 = () =>
{
    return (
        <>
            <Head>
                <title>حافظ‌لایو - تمامی عزلیات و اشعار حافظ شیرازی</title>
            </Head>

            <Main>
                <Error
                    title='500'
                    message='ارور از سرور'
                />
            </Main>
        </>
    );
};

export default Error500;
