import Input from "@/app/components/tools/input";

const Form = () => {
  return (
    <form action="" className="glass mb-12 pb-2 lg:grid lg:grid-cols-1 ">
      <div className="lg:grid lg:justify-items-center">
        <div className="flex flex-col items-center pt-4">
          <label htmlFor="">Votre prénom :</label>
          <Input type="text" placeholder="Prénom" />
        </div>
        <div className="flex flex-col items-center py-4">
          <label htmlFor="">Votre Nom :</label>
          <Input type="text" placeholder="Nom" />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="">Votre Email :</label>
          <Input type="email" placeholder="E-mail" />
        </div>
      </div>
      <div className="flex flex-col items-center py-4 mx-6">
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
      <div className="py-8 grid justify-items-center">
        <button className="bg-cyan-900 rounded-full w-20">Envoyer</button>
      </div>
    </form>
  );
};

export default Form;
