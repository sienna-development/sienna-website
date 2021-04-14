import Head from "next/head";
import Header from "./header";

export default function Layout({ children, page }) {

  const isHome = page === "Home" ? true : false;

  return (
    <>
      <Head>
        <title>Sienna | {page}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Sienna are developers for social good."
        />
        <meta property="og:image" content="" />
        <meta name="og:title" content="Sienna" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla&family=Londrina+Sketch&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header transparent={isHome} />
      <main>{children}</main>
    </>
  );
}
