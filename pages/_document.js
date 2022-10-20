import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="../assets/rodal/lib/rodal.css" />
        </Head>
        <body className="bg-[#ebeef2] dark:bg-[#122337] overflow-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
