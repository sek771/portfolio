"use client";

import "@/app/assets/css/styles.css";
import { Inter } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Preloader from "@/app/components/tools/preloader/preloader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <html lang="fr">
      <body className={inter.className}>
        <Preloader /> {/* ✅ Déplacé dans <body> */}
        {children}
      </body>
    </html>
  );
}
