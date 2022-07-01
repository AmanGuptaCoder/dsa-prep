import "../styles/globals.css";
import LoadingBar from "react-top-loading-bar";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  }, [router.query]);

  return (
    <>
      <Script id="script1"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-ZKBXH4WESZ`}
      />

      <Script id="script2" strategy="lazyOnload">
        {`
       window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-ZKBXH4WESZ');
    `}
      </Script>
      <LoadingBar
        color="#ffffff"
        waitingTime={400}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
