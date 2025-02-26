import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600','700'],
});

export const metadata: Metadata = {
  title: "Avejo Design",
  description: "Criamos experiências digitais para projetos inovadores e consistentes, com foco no crescimento de nossos clientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased overflow-x-hidden`}
      >
        {children}
        
      </body>
    </html>
  );
}
