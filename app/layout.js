import { Inter } from "next/font/google";
import "./globals.scss";
import ScrollToTop from "./components/scrolltotop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce",
  description:
    "Buy Blend Bay is an ecommerce platform. Which is services multiple category products.",
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
