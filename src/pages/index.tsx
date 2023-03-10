import type { NextPage } from "next";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Section4 from "../../components/section4";
import Section5 from "../../components/section5";
import Faq from "../../components/faq";
import Head from "next/head";
import favicon from "../../public/assets/favicon.png";
import metaCard from "../../public/assets/priv-metacard.png";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Priv Health</title>
        <meta name="generator" content="SEOmatic" />
        <link
          href={favicon.src}
          rel="shortcut icon"
          type="image/png"
        />
        <meta
          name="keywords"
          content="erectile dysfunction, premature ejaculation, hair loss, cold sores, genital herpes, vaginal dryness"
        />
        <meta
          name="description"
          content="Priv provides private and personalized treatments for erectile dysfunction, vaginal dryness, premature ejaculation, hair loss, and more"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="107593817569600" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content="https://privhealth.com/" property="og:url" />
        <meta
          content="Priv Health - Personalized treatments for erectile dysfunction, vaginal dryness, premature ejaculation, hair loss, and more"
          property="og:title"
        />
        <meta
          content="Priv provides private and personalized treatments for erectile dysfunction, vaginal dryness, premature ejaculation, hair loss, and more"
          property="og:description"
        />
        <meta
          content={metaCard.src}
          property="og:image"
        />
        <meta content="1024" property="og:image:width" />
        <meta content="512" property="og:image:height" />
        <meta content="An image of the Priv logo" property="og:image:alt" />
        <meta
          content="https://instagram.com/tryprivhealth/"
          property="og:see_also"
        />
        <meta
          content="https://facebook.com/tryprivhealth/"
          property="og:see_also"
        />
        <meta
          content="https://twitter.com/tryprivhealth"
          property="og:see_also"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tryprivhealth" />
        <meta name="twitter:creator" content="@tryprivhealth" />
        <meta
          name="twitter:title"
          content="Priv Health - Personalized treatments for erectile dysfunction, vaginal dryness, premature ejaculation, hair loss, and more"
        />
        <meta
          name="twitter:description"
          content="Priv provides private and personalized treatments for erectile dysfunction, vaginal dryness, premature ejaculation, hair loss, and more"
        />
        <meta
          name="twitter:image"
          content={metaCard.src}
        />
        <meta name="twitter:image:width" content="1024" />
        <meta name="twitter:image:height" content="512" />
        <meta name="twitter:image:alt" content="An image of the Priv logo" />
        <link rel="me" href="https://twitter.com/tryprivhealth" />
        <link href="https://privhealth.com/" rel="canonical" />
        <link href="https://privhealth.com/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://privhealth.com/"
          hrefLang="x-default"
          rel="alternate"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,
      shrink-to-fit=no, maximum-scale=1"
        />
      </Head>
      <Navbar />
      <Hero />
      <Section4 />
      <Section5 />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
