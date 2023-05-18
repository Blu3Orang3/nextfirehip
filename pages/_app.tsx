import '@/styles/globals.css'
// import type { AppProps } from 'next/app'
import Navbar from "@/components/Navbar"
import { GetServerSideProps } from "next"

import { Toaster } from 'react-hot-toast';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}