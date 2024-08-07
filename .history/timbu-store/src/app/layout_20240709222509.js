
import './fonts.css'; // Import the fonts CSS here
import { Html, Head, Main, NextScript } from 'next/document';

export const metadata = {
  title: 'Timbu Store',
  description: 'We sell beauty',
};

export default function RootLayout({ children }) {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        {children}
      </body>
    </Html>
  );
}





style={{ backgroundColor: "#F8F8F8", fontFamily: "Kanit" }}