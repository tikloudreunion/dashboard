import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dashboard - Ti Kloud Réunion",
  description: "Ti Kloud Réunion’s centralized web dashboard application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Ti Kloud Réunion" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
