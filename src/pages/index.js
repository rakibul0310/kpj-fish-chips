import Head from "next/head";
import Layout from "../components/Layout";
import Home from "@/components/Home";
import AboutUs from "@/components/AboutUs";
import SpacialMenu from "@/components/Menu";
import Introduction from "@/components/Introduction";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Contacts from "@/components/Contact";
// import Footer from "components/Footer";
// import AboutUs from "components/AboutUs";
// import SpacialMenu from "components/Menu";
// import Introduction from "components/Introduction";
// import VideoIntro from "components/VideoIntro";
// import Gallery from "components/Gallery";
// import Contacts from "components/Contact";

function Template({ data }) {
  return (
    <>
      <Head>
        <title>Restaurant</title>
        <meta name="description" content="KPJ's Fish and Chips" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Home />
        <AboutUs />
        <SpacialMenu />
        <Introduction />
        <Gallery />
      </Layout>
      <Footer>
        {/* <VideoIntro url={chooseByType(data, "video")} /> */}
        <Contacts />
      </Footer>
    </>
  );
}

export default Template;
