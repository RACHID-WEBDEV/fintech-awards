import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url) => (url === router.asPath) && setTimeout(() => { setLoading(false) }, 1500);

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return loading && (
    <div className="bodybg">
      <div className="cube-wrapper">
        <div className="cube-folding">
          <span className="leaf1" />
          <span className="leaf2" />
          <span className="leaf3" />
          <span className="leaf4" />
        </div>
        <span className="loading" data-name="Loading">Loading...</span>
      </div>

    </div>

  )
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Loading />
      <ThemeProvider attribute="class">
        {/* <Header /> */}
        <Component {...pageProps} />
        {/* <Footer /> */}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
