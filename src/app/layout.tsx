import { GoogleAnalytics } from '@next/third-parties/google';

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { WhatsappButton } from './sections/WhatsappButton';
import { LanguageProvider } from "./i18n/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600','700'],
});

export const metadata: Metadata = {
  title: "Avejo Design",
  description: "We create digital experiences for innovative and consistent projects, focused on our clients' growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased overflow-x-hidden`}>
        <LanguageProvider>
          {children}
          <WhatsappButton />
        </LanguageProvider>
      </body>
      <GoogleAnalytics gaId="G-8FGB4YZD57" />
      
    </html>
  );
}
