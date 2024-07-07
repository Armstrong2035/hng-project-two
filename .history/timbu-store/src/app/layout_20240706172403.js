export const metadata = {
  title: "timbu Store",
  description: "We sell beauty products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
