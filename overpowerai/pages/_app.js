import Follow from "@/components/Follow";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OverPowerAI</title>
        <meta name="description" content="OverPowerAI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar></Navbar>

      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}
