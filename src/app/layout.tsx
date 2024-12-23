import type { Metadata } from "next";
import { Poppins, Abhaya_Libre } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const abhayaLibre = Abhaya_Libre({
  variable: "--font-abhaya-libre",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: 'UnitPudgy Antarctica',
  description: 'Join Unit Network and Pudgy Penguins on an exclusive expedition to Antarctica in January 2025. Experience a unique adventure combining Web3 communities, tokenization, and exploration of one of Earth\'s last frontiers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${abhayaLibre.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
