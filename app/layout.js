import { Inter, Anton, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";
import Head from "./head";
import Logout from "@/components/Logout";



const open = Open_Sans({ subsets: ["latin"]});
const anton = Anton({ subsets: ["latin"], weight: ['400']});


export const metadata = {
  title: "Moodis",
  description: "Mood monitoring app",
};

export default function RootLayout({ children }) {

  const header = (
  <header className="p-4 sm:p-8 flex items-center justify-between gap-4 ">
    <Link href={'/'}>
      <h1 className={"text-base sm:text-lg textGradient "+ anton.className}>
        Moodis
      </h1>
    </Link>
    <Logout />
  </header>
  )

  const footer = (
  <footer className="p-4 sm:p-8 grid place-items-center">
      <Link href='' target="_blank" className="">
      <p className={"text-base sm:text-lg textGradient duration-200 hover:text-white hover:bg-indigo-500 " + anton.className}>Created with 💙 by Randolf</p>
      </Link>
  </footer>)

  return (
    <html lang="en">
      <Head />
      <AuthProvider>
      <body className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-600 ' + open.className}>
        {header}
          {children}
        {footer}
      </body>
      </AuthProvider>
    </html>
  );
}
