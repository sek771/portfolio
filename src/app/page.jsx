"use client";
import Menu from "./components/layouts/headermobile";
import contact from "./contact/page";
import Input from "./components/layouts/props/input";
import Footer from "./components/layouts/footer/page";
import Image from "./image/image";
import Mini from "./mini-img/page";
import Header from "./components/layouts/header/page";
import textarea from "./components/layouts/props/textarea";
import Hamburger from "hamburger-react";
import HeaderMobile from "./components/layouts/headermobile";
export default function () {
  return (
    <>
      <main className="grid grid-cols-1  lg:text-center ">
        <Header />
        <section>
          <div className="lg:hidden w-full bg-emerald-800">
            <Hamburger />
            <HeaderMobile />
          </div>
          <div></div>
        </section>
        <section className=" px-5 w-full bg-slate-500">
          <div>
            <div className="lg:text-center uppercase ">
              <h2 className="text-3xl lg:text-6xl text-center">
                Bienvenue sur le portfolio de mr sacko
              </h2>
            </div>
            <div className="grid grid-cols-2 mx-10 py-6 lg:flex lg:justify-center lg:px-96">
              <Mini />
              <Mini />
            </div>
          </div>
        </section>
        <section className="lg:grid px-5">
          <div>
            <h2 className="uppercase mt-5 text-center text-4xl ">
              presentation
            </h2>
          </div>
          <div className="flex w-full bg-gray-400 pt-5 grid grid-cols-2 ">
            <div className="  lg:text-left">
              <Image />
            </div>
            <div>
              <p className=" text-2xl">
                Lorem ipsum dolor flt amet consectetur adipisicing elit. amet
                alias perspiciatis totam maxime.
              </p>
            </div>
          </div>
        </section>
        <section className="uppercase text-center px-5">
          <div>
            <h1 className="text-4xl pt-10 pb-5">projet</h1>
          </div>
          <div>
            <div className=" grid grid-cols-2 pt-5 w-full bg-gray-600 lg:flex lg:justify-center">
              <div className="">
                <Mini />
                <p className="pt-2 text-2xl">cta</p>
              </div>
              <div>
                <Mini />
                <p className="pt-2 text-2xl">cta</p>
              </div>
              <div>
                <Mini />
                <p className="pt-2 text-2xl">cta</p>
              </div>
              <div>
                <Mini />
                <p className="pt-2 text-2xl">cta</p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-5">
          <div>
            <h2 className="uppercase pt-10 mx-10 text-4xl text-center ">
              competences
            </h2>
          </div>
          <div className="pt-5 grid grid-cols-1 lg:flex lg:justify-center lg:grid lg:grid-cols-2 lg:mx-40">
            <div className=" pt-3 grid grid-cols-2">
              <Mini />
              <li className="text-2xl">lorem ipsum dolor sit amet</li>
            </div>
            <div className=" pt-3 grid grid-cols-2">
              <Mini />
              <li className="text-2xl">lorem ipsum dolor sit amet</li>
            </div>
            <div className=" pt-3 grid grid-cols-2">
              <Mini />
              <li className="text-2xl">lorem ipsum dolor sit amet</li>
            </div>
            <div className="pt-3 grid grid-cols-2 ">
              <Mini />
              <li className="text-2xl">lorem ipsum dolor sit amet</li>
            </div>
          </div>
        </section>
        <section className="px-5">
          <div className="uppercase text-center pt-10">
            <h1 className="text-4xl">parcours</h1>
          </div>
          <div className="pt-5 grid grid-cols-1col flex w-full bg-slate-500">
            <div className="mx-3">
              <li className="py-5 text-2xl">
                Curaitur quis magna id velit malesuada consequat
              </li>
              <li className="py-5 text-2xl">
                Mauris ultrices lorem tincidunt,elementum ipsum eget , pulvinar
                nisi
              </li>
              <li className="py-5 text-2xl">
                Pellentesque laoreet arcu vitae sem condimentum elementum
              </li>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 text-center lg:flex lg:justify-center px-5">
          <form action="" className=" ">
            {/* La div représente un bloc avec un grid en 2 colonne */}
            <div className="uppercase text-4xl">
              <h1>contact</h1>
            </div>
            <div className="px-12 py-5 lg:flex lg:justify-center">
              <div className="flex flex-col items-center pr-10 pb-5">
                <input
                  type="name"
                  className="border-2 rounded-full bg-gray-200"
                  placeholder="NOM/Prénom"
                />
              </div>
              <div className="flex flex-col items-center pr-10">
                <input
                  type="email"
                  className="border-2 rounded-full bg-gray-200"
                  placeholder="E-mail"
                />
              </div>
            </div>
            <div className="lg:mx-60 lg:grid lg:grid-cols-1">
              <textarea
                name=""
                id="message"
                cols="38"
                rows="5"
                className="border-2 rounded-lg w-full bg-gray-200"
                placeholder="Objet du message"
              />
            </div>
            <div className="py-8">
              <button className="bg-gray-500">Envoyer</button>
            </div>
          </form>
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}
