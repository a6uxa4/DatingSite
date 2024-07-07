import { NextUIProvider } from "@/providers/NextUI";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WEBSITE",
  description: "WEBSITE",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
