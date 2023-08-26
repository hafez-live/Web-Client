import React, { useEffect, useState } from 'react';

import '../styles/globals.scss';

import type { AppProps } from 'next/app';

import Navbar from '../components/layouts/navbar/navbar.component';
import Footer from '../components/layouts/footer/footer.component';

function MyApp({ Component, pageProps }: AppProps)
{
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() =>
    {
        setDomLoaded(true);
    }, []);

    return (
        domLoaded &&
        (
            <>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </>
        )
    );
}

export default MyApp;
