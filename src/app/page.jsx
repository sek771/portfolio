"use client";

import Header from "@/app/components/layouts/header";
import Home from "@/app/home";
import Footer from "@/app/components/layouts/footer";
import Scroll from "./components/tools/scroll to top";

const HomePage = () => {
  return (
    <>
      <Scroll />
      <Header />
      <Home />
      <Footer />
    </>
  );
};
export default HomePage;
