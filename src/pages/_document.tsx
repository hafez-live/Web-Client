import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document
{
    static async getInitialProps(ctx: DocumentContext)
    {
        return await Document.getInitialProps(ctx);
    }

    render(): JSX.Element
    {
        return (
            <Html lang='fa' dir='rtl'>
                <Head>
                    <meta charSet='UTF-8' />
                    <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />
                    <meta content="ie=edge" httpEquiv='X-UA-Compatible' />

                    <link rel="icon" href="/favicon.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
