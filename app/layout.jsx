import { Poppins } from "next/font/google";
import "./globals.css";

import Header from './components/Header'
import Footer from './components/Footer'

const poppins = Poppins({ weight: ['400', '700'], subsets: ["latin"] });

export const metadata = {
  title: "PokeNext",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}