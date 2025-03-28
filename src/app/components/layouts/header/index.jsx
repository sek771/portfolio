"use client";

import { useState, useEffect } from "react";
import HeaderMobile from "@/app/components/layouts/header/mobile";
import HeaderDesktop from "@/app/components/layouts/header/desktop";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Si on descend, on cache le header
        setIsVisible(false);
      } else {
        // Si on remonte, on affiche le header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <HeaderDesktop />

      <div className="lg:hidden">
        <HeaderMobile />
      </div>
    </header>
  );
};

export default Header;
