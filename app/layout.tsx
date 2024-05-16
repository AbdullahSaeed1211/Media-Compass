import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Media Compass",
  description: "Manage, schedule, and analyze all your social media campaigns in one place. Our platform provides powerful tools to streamline your social media strategy, enhance engagement, and track performance across all major social networks. Whether you`re a small business or a large enterprise, we help you stay ahead of the curve.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
