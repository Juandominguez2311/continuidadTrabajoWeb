import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../styles/globals.css';
import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Perinetti e Hijos',
  description: 'Perinetti e Hijos - Continuidad de Negocios',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-[#171717]">
        <NavBar />
        <main className="flex-1 pt-14 lg:pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
