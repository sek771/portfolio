import Input from "../components/layouts/props/input";
import textarea from "../components/layouts/props/textarea";

const contact = () => {
  return (
    <section className="grid grid-cols-1 text-center lg:flex lg:justify-center">
      <form action="" className=" ">
        {/* La div représente un bloc avec un grid en 2 colonne */}
        <div className="uppercase text-4xl">
          <h1>contact</h1>
        </div>
        <div className="px-12 py-5 lg:flex lg:justify-center">
          <div className="flex flex-col items-center pr-10">
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
  );
};
export default contact;
