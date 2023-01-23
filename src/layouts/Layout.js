import Head from "next/head";
import { useEffect } from "react";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import State from "../context/context";
import { customCursor, dataImage, imgToSVG, preloader } from "../utilits";
import { waves } from "../waves";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import Mouse from "./Mouse";
import PreLoader from "./PreLoader";
import Settings from "./Settings";

const Layout = ({ children }) => {
  useEffect(() => {
    dataImage();
    // customCursor();
    preloader();
    waves();
    imgToSVG();
  }, []);

  return (
    <State>
      <Head>
        <link rel="icon" type="image/png" href="img/favicon.png" />
        <title>James Hoffman | Software Engineer</title>
      </Head>
      <PreLoader />
      {/* <ImageView /> */}
      <VideoPopup />
      <div
        className="edrea_tm_all_wrap"
        data-magic-cursor="show"
        data-enter="fadeInUp"
        data-exit=""
      >
        {/* WAVE DOTS */}
        <div className="waves" />

        <Settings />
        <MobileHeader />
        <Header />
        <div className="edrea_tm_content">{children}</div>

        {/* MAGIC CURSOR */}
        <Mouse />

      </div>
    </State>
  );
};
export default Layout;
