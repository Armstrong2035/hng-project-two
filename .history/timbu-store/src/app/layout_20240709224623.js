"use client";

import "./fonts.css";
import { Html, Main, NextScript } from "next/document";
import Head from "next/head";

const metadata = {
  title: "Timbu Store",
  description: "We sell beauty",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html>
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </Head>
        <div>{children}</div>
      </html>
    </>
  );
}
