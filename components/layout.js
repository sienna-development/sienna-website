import React from "react"
import Head from "next/head";
import Header from "./header";

export default function Layout({ children, page }) {
  const opaqueHeadersPages = ["Projects", "Services"];
  const [isDesktop, setDesktop] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setDesktop(window.innerWidth > 1000);
    }
    // eslint-disable-next-line
  }, []);

  const updateMedia = () => {
    if (typeof window !== "undefined") {
      setDesktop(window.innerWidth > 1000);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const needsTransparentHeader = !opaqueHeadersPages.includes(page)
    ? true
    : false;

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
      <Header transparent={needsTransparentHeader} isDesktop={isDesktop} />
      <main>{children}</main>
    </>
  );
}
