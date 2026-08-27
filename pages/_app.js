import '../styles/globals.css'
import Script from 'next/script'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  fallback: ['Georgia', 'serif'],
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${inter.style.fontFamily};
          --font-serif-display: ${playfair.style.fontFamily};
        }
      `}</style>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-J2BPDNSJS8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J2BPDNSJS8');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
