import React from 'react';
import Head from 'next/head';

import Error from '@/components/error';
import Main from '@/components/layouts/main/main.component';

const Documents = () =>
{
    return (
        <>
            <Head>
                <title>حافظ‌لایو - وب‌سرویس اختصاصی غزلیات و اشعار حافظ شیرازی</title>
            </Head>
            <Main>
                <Error
                    title='به زودی'
                    message='وب‌سرویس حافظ‌لایو در حال حاضر دردسترس عموم قرار نگرفته است'
                />
            </Main>
        </>
    );
};

export default Documents;
