import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";

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
  title: "Metas diarias",
  description: "Gerenciador de metas diárias.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-slate-50 min-h-screen`}
      >
        <Image className="mx-auto mt-10 mb-5 justify-center items-center"
        src='https://www.svgrepo.com/show/530661/genetic-data.svg'
        width={200}
        height={200}
        alt="logo"
        />

        {children}
      </body>
    </html>
  );
}
