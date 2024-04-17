import { Inter } from "next/font/google";
import "./globals.scss";
import ScrollToTop from "./components/scrolltotop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Techobin",
  description:
    "Techobin is an software service platform. Which is services multiple digital products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
