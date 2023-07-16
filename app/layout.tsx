import type { Metadata } from "next";

import { JetBrains_Mono } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Pontakorn Prasertsuk",
  description: "My portfolio",
};

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>{children}</body>
    </html>
  );
}
