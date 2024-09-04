import React from "react";
import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";

const redex = Readex_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VLDschool",
  description: "Trouvez la formation qu'il vous faut avec VLDschool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={redex.className}>{children}</body>
    </html>
  );
}
