import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export const metadata = {
  title: "timbu Store",
  description: "We sell beauty products",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={"main"}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
