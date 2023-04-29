import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FlightSchool.fyi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <div
          className={`flex min-h-screen flex-col items-center justify-between lg:p-24 md:p-12 pt-8 px-8`}
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
