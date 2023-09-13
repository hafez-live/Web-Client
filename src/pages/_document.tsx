import React from 'react';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

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
                    <link rel='icon' href='https://hafez.live/favicon.png'/>
                    <link rel='apple-touch-icon' href='https://hafez.live/favicon.png'/>
                    <link rel='canonical' href='https://hafez.live' />

                    <meta property='theme-color' content='#423d91'/>

                    <meta name='language' content='fa'/>
                    <meta name='Classification' content='Blogs'/>
                    <meta name='subject' content='حافظ شیرازی'/>
                    <meta name='keywords' content='حافظ شیرازی, شیراز, غزلیات حافظ, اشعار حافظ, حافظ‌لایو, hafez live'/>
                    <meta name='author' content='حافظ شیرازی'/>

                    <meta property='og:type' content='website'/>
                    <meta property='og:url' content='https://hafez.live/'/>
                    <meta property='og:title' content='Hafez Live'/>
                    <meta property='og:description' content='Hafez.Live is an online platform for introducing the great Iranian poet and lyricist, Hafez Shirazi, to people around the world and familiarizing everyone with his poems and lyrics.'/>
                    <meta property='og:image' content='https://hafez.live/favicon.png'/>

                    <meta property='twitter:card'/>
                    <meta property='twitter:url' content='https://hafez.live/'/>
                    <meta property='twitter:title' content='Hafez Live'/>
                    <meta property='twitter:description' content='Hafez.Live is an online platform for introducing the great Iranian poet and lyricist, Hafez Shirazi, to people around the world and familiarizing everyone with his poems and lyrics.'/>
                    <meta property='twitter:image' content='https://hafez.live/favicon.png'/>


                    <meta charSet='UTF-8' />
                    <meta content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' name='viewport' />
                    <meta content="ie=edge" httpEquiv='X-UA-Compatible' />
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
