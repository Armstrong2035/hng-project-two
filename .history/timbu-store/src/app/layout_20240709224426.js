"use client";

import "./fonts.css";
import { Html, Head, Main, NextScript } from "next/document";

const metadata = {
  title: "Timbu Store",
  description: "We sell beauty",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div>{children}</div>
    </>
  );
}
