import type { NextPage } from "next";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Section4 from "../../components/section2";
import Section5 from "../../components/section5";
import Faq from "../../components/faq";
import Head from "next/head";
import favicon from "../../public/assets/favicon.png";
import metaCard from "../../public/assets/priv-metacard.png";
import Script from "next/script";
import Section6 from "../../components/section6";
import Section3 from "../../components/section3";
import Section2 from "../../components/section2";
import AutoScrollComponent from "../../components/auto-scroll";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Priv Health - Simple and private healthcare for men</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="keywords"
          content="erectile dysfunction, premature ejaculation, hair loss, low testosterone, STIs"
        />
        <meta
          name="description"
          content="Priv provides private and personalized treatments for erectile dysfunction, premature ejaculation, hair loss, and more"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="107593817569600" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content="https://privhealth.co/" property="og:url" />
        <meta
          content="Priv Health - Personalized treatments for erectile dysfunction, premature ejaculation, hair loss, and more"
          property="og:title"
        />
        <meta
          content="Priv provides private and personalized treatments for erectile dysfunction, premature ejaculation, hair loss, and more"
          property="og:description"
        />
        <meta content={metaCard.src} property="og:image" />
        <meta content="785" property="og:image:width" />
        <meta content="394" property="og:image:height" />
        <meta
          content="An image of the Priv health logo"
          property="og:image:alt"
        />
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
          content="Priv Health - Personalized treatments for erectile dysfunction, premature ejaculation, hair loss, and more"
        />
        <meta
          name="twitter:description"
          content="Priv provides private and personalized treatments for erectile dysfunction, premature ejaculation, hair loss, and more"
        />
        <meta
          name="twitter:image:src"
          content="https://privhealth.co/_next/static/media/priv-metacard.bfa5bd2e.png"
        />
        <meta name="twitter:image:width" content="738" />
        <meta name="twitter:image:height" content="394" />
        <meta
          name="twitter:image:alt"
          content="An image of the Priv health logo"
        />
        <link rel="me" href="https://twitter.com/tryprivhealth" />
        <link href="https://privhealth.co/" rel="canonical" />
        <link href="https://privhealth.co/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://privhealth.co/"
          hrefLang="x-default"
          rel="alternate"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,
      shrink-to-fit=no, maximum-scale=1"
        />
        <meta
          name="facebook-domain-verification"
          content="ydhokuda2jbyn329ymapza2hdhbumm"
        />
        <script type="text/javascript">
          {` (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "h4m1mgccyl");`}
        </script>
      </Head>
      <Navbar />
      <Hero />
      <AutoScrollComponent/>
      <Section2 />
      <Section3 />
     
      <Section5 />
      <Section6 />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
