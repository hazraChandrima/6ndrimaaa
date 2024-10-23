import localFont from "next/font/local";
import Navbar from "@/components/Navbar/navbar";
import "./globals.css";
import {MobileNavbar} from "@/components/mobileNavbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Chandrima Hazra",
  description: "portfolio of Chandrima Hazra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark bg-black`}
      >
        <Navbar/>
        <MobileNavbar/>
        {children}
      </body>
    </html>
  );
}
