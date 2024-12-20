import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/Navbar";
import ShopContextProvider from "./_context/ShopContextProvider";
import Footer from "./_components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  title: "FOREVER SHOPPING",
  description: "Generated by create next app",
  icon:"/logo.svg"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative   `}
      > 
       <ToastContainer
       limit={4}
       />
<ShopContextProvider>
      
     <main className="px-0  md:px-10 lg:px-16 xl:px-20 mx-auto max-w-screen-2xl " >

          <Navbar/>
        {children}
</main>
    <Footer /> 
     


</ShopContextProvider>
 
      </body>
    </html>
  );
}
