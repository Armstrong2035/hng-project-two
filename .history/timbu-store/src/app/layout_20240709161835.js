export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#F8F8F8", fontFamily: "Kanit" }}>
        {children}
      </body>
    </html>
  );
}
