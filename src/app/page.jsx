"use client";

import Footer from "./components/layouts/footer/page";
import Image from "./image/image";
import Mini from "./mini-img/page";
import Header from "./components/layouts/header/page";
import Headermobile from "./components/layouts/headermobile/page";
export default function () {
  return (
    <>
      <main className="grid grid-cols-1  lg:text-center">
        <Header />
        <Headermobile />
        <section>
          <div>
            <h1 className="uppercase text-center lg:hidden">menu hamburger</h1>
          </div>
        </section>
        <section className="flex w-full bg-slate-500 grid grid-cols-1 ">
          <div className="lg:text-center uppercase mt-5">
            <h2>Bienvenue sur le portfolio de mr sacko</h2>
          </div>
          <div className="grid grid-cols-2 mx-10 py-6 lg:flex lg:justify-center lg:mx-96">
            <Mini />
            <Mini />
          </div>
        </section>
        <section className="lg:grid lg:gr">
          <div>
            <h2 className="uppercase mt-5 text-center">presentation</h2>
          </div>
          <div className="flex w-full bg-gray-400 pt-5 grid grid-cols-2 ">
            <div className="  lg:text-left">
              <Image />
            </div>
            <div>
              <p className="">
                Lorem ipsum dolor flt amet consectetur adipisicing elit. amet
                alias perspiciatis totam maxime.
              </p>
            </div>
          </div>
        </section>
        <section className="uppercase px-10 text-center ">
          <div>
            <h1>projet</h1>
          </div>
          <div>
            <div className=" grid grid-cols-2 pt-5 w-full bg-gray-600 lg:flex lg:">
              <div className="">
                <Mini />
                <p className="pt-2">cta</p>
              </div>
              <div>
                <Mini />
                <p className="pt-2">cta</p>
              </div>
              <div>
                <Mini />
                <p className="pt-2">cta</p>
              </div>
              <div>
                <Mini />
                <p className="pt-2">cta</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2 className="uppercase pt-10 mx-10  text-center">competences</h2>
          </div>
          <div className="pt-5 grid grid-cols-1 lg:flex lg:justify-center lg:grid lg:grid-cols-2 lg:mx-40">
            <div className=" pt-3 grid grid-cols-2">
              <Mini />
              <li>lorem ipsum dolor sit amet</li>
            </div>
            <div className=" pt-3 grid grid-cols-2">
              <Mini />
              <li>lorem ipsum dolor sit amet</li>
            </div>
            <div className=" pt-3 grid grid-cols-2">
              <Mini />
              <li>lorem ipsum dolor sit amet</li>
            </div>
            <div className="pt-3 grid grid-cols-2 ">
              <Mini />
              <li>lorem ipsum dolor sit amet</li>
            </div>
          </div>
        </section>
        <section>
          <div className="uppercase text-center pt-10">
            <h1>parcours</h1>
          </div>
          <div className="pt-5 grid grid-cols-1col flex w-full bg-slate-500">
            <div className="mx-3">
              <li className="py-5">
                Curaitur quis magna id velit malesuada consequat
              </li>
              <li className="py-5">
                Mauris ultrices lorem tincidunt,elementum ipsum eget , pulvinar
                nisi
              </li>
              <li className="py-5">
                Pellentesque laoreet arcu vitae sem condimentum elementum
              </li>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 text-center lg:flex lg:justify-center">
          <form action="" className=" ">
            {/* La div représente un bloc avec un grid en 2 colonne */}
            <div className="px-12 py-5 lg:flex lg:justify-center">
              {/* Colonne 1 */}
              <div className="flex flex-col items-center pr-10">
                <label htmlFor="" className="">
                  Votre NOM/Prénom:
                </label>
                <input
                  type="text"
                  className="border-2 rounded-full bg-gray-400"
                />
              </div>
              <div className="flex flex-col items-center pr-10">
                <label className="" htmlFor="">
                  Votre email:
                </label>
                <input
                  type="email"
                  className="border-2 rounded-full bg-gray-400"
                />
              </div>
            </div>
            <div className="lg:mx-60 lg:grid lg:grid-cols-1">
              <label htmlFor="" className="">
                Objet du message:
              </label>
              <textarea
                name=""
                id="message"
                cols="38"
                rows="5"
                className="border-2 rounded-lg w-full bg-gray-400  "
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
