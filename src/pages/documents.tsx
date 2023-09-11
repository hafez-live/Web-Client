import React from 'react';

import Head from 'next/head';

import Error from '@/components/error';
import Main from '@/components/layouts/main/main.component';

const Documents = () =>
{
    return (
        <>
            <Head>
                <title>وبسایت اختصاصی حافظ شیرازی معروف ترین غزل سرای ایران</title>
                <meta charSet='UTF-8' />
                <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />
                <meta content="ie=edge" httpEquiv='X-UA-Compatible' />
            </Head>
            <Main>
                <Error
                    title='به زودی'
                    message='وب‌سرویس حافظ‌هاب در حال حاضر دردسترس عموم قرار نگرفته است'
                />
            </Main>
        </>
    );
};

export default Documents;