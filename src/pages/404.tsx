import React from 'react';
import Head from 'next/head';

import Error from '@/components/error';
import Main from '@/components/layouts/main/main.component';

const Error404 = () =>
{
    return (
        <>
            <Head>
                <title>حافظ‌هاب - تمامی عزلیات و اشعار حافظ شیرازی</title>
            </Head>

            <Main>
                <Error
                    title='404'
                    message='صفحه مورد نظر پیدا نشد'
                />
            </Main>
        </>
    );
};

export default Error404;
