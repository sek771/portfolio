import Input from "@/app/components/tools/input";

const Form = () => {
  return (
    <form action="" className=" pb-5 lg:grid lg:grid-cols-1 ">
      <div className="px-12 py-5 lg:grid lg:justify-items-center">
        <div className="flex flex-col items-center pr-10 pb-5">
          <label htmlFor="">Votre prénom :</label>
          <Input type="text" placeholder="Prénom" />
        </div>
        <div className="flex flex-col items-center pr-10 pb-5">
          <label htmlFor="">Votre Nom :</label>
          <Input type="text" placeholder="Nom" />
        </div>
        <div className="flex flex-col items-center pr-10">
          <label htmlFor="">Votre Email :</label>
          <Input type="email" placeholder="E-mail" />
        </div>
      </div>
      <div className="">
        <label htmlFor="">Objet du message :</label>
        <textarea
          name=""
          id="message"
          cols="20"
          rows="5"
          className="border-2 rounded-lg w-full bg-gray-200"
          placeholder="Objet du message"
        />
      </div>
      <div className="py-8">
        <button className="bg-gray-500">Envoyer</button>
      </div>
    </form>
  );
};

export default Form;
