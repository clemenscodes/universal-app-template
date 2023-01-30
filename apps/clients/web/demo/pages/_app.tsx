import { AppProps } from 'next/app';
import Head from 'next/head';
import '../global.css';
import 'raf/polyfill';

// FIXME remove this once this reanimated fix gets released
// https://github.com/software-mansion/react-native-reanimated/issues/3355
if (process.browser) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window._frameTimestamp = null;
}

import { enableSwcHack } from 'moti';
enableSwcHack();

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Capital Tracker</title>
                <meta name="description" content="Capital Tracker" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="app">
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default CustomApp;
