import NavBar from "@/app/components/NavBar";
import { Roboto } from "next/font/google";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./globals.css";

const inter = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Eder Rimarachin | FullStack Developer",
  description:
    "Eder Rimarachin, developer, backend, frontend, database, bootstrap, tailwindcss, sql, mysql, mongodb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main-cs  text-white">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
