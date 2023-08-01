import Input from "@/app/components/tools/input";

const Form = () => {
  return (
    <form action="" className=" pb-5 ">
      <div className="px-12 py-5 lg:flex lg:justify-center">
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
      <div className="lg:mx-60 lg:grid lg:grid-cols-1">
      <label htmlFor="">Objet du message :</label>
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
  );
};

export default Form;
