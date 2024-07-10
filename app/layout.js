import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from '@/components/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Waterscapesng",
  description: "Swimming pool construction and pool products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="">
        <div className="layout-container">
          <NavBar />
          <main className="content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
