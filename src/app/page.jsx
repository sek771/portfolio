"use client";
import Image from "./image/image";
export default function () {
  return (
    <>
      <main className="grid grid-cols-1 mx-12">
        <section>
          <div>
            <h1 className="uppercase text-center">menu hamburger</h1>
          </div>
        </section>
        <section className="flex w-full bg-slate-500">
          <div className="uppercase mt-5">
            <h2>Bienvenue sur le portfolio de mr sacko</h2>
          </div>
        </section>
        <section>
          <div>
            <h2 className="uppercase mt-5 text-center">presentation</h2>
          </div>
          <div className="flex w-full bg-gray-400 pt-5 grid grid-cols-1">
            <div className="pt-5 mx-10">
              <Image />
            </div>
            <div>
              <p className="pt-5 mx-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
                alias perspiciatis totam maxime.
              </p>
            </div>
          </div>
          <div className="uppercase grid grid-cols-2 px-10 text-center">
            <p className="pt-10">cta</p>
            <p className="pt-10">cta</p>
            <p className="pt-5">cta</p>
            <p className="pt-5">cta</p>
          </div>
        </section>
        <section>
          <div>
            <h2 className="uppercase pt-10 mx-10  text-center">competences</h2>
          </div>
          <div className="pt-5">
            <li>lorem ipsum dolor sit amet</li>
            <li>lorem ipsum dolor sit amet</li>
            <li>lorem ipsum dolor sit amet</li>
            <li>lorem ipsum dolor sit amet</li>
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
        <section className="grid grid-cols-1 text-center">
          <form action="" className=" ">
            {/* La div représente un bloc avec un grid en 2 colonne */}
            <div className="grid grid-cols-1 px-12 py-5 ">
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
            <div className="">
              <label htmlFor="" className="">
                Objet du message:
              </label>
              <textarea
                name=""
                id="message"
                cols="38"
                rows="5"
                className="border-2 rounded-lg w-full bg-gray-400"
              />
            </div>
            <div className="py-8">
              <button className="bg-gray-500">Envoyer</button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
