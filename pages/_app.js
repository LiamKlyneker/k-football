import Script from 'next/script';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const theme = typeof window !== "undefined" && localStorage.getItem('theme') || 'light';
  return (
    <>
      <Script id="show-banner" strategy="lazyOnload">
        {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }`}
      </Script>
      <Component {...pageProps} className={theme} />
    </>
  );
}

export default MyApp
