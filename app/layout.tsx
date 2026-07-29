import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noah’s Ark Summer 2026 | AMPHTML Ad Previews",
  description:
    "Client previews for the latest Version A and Version B AMPHTML ads.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
