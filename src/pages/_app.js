import "../styles/global.scss";
import Header from "../Components/Header";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="MyApp">
        <NextNProgress
          color={`var(--primary-theme-3)`}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
