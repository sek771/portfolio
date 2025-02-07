"use client";

const Introduction = () => {
  return (
    <section
      className="grid justify-items-center bg-gray-900 text-white"
      id="Présentation"
    >
      <div className="lg:w-4/6 text-center my-8">
        <h1
          className="text-3xl md:text-4xl font-bold text-center mb-12 "
          style={{ color: "#ffd700" }}
        >
          Présentation
        </h1>
        <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition lg:grid lg:grid-cols-2">
          <img
            src="/images/img.png"
            width={250}
            height={350}
            alt="Picture of the author"
            className="my-6 lg:m-8"
          />
          <div className="font-aileron text-xl py-6 px-4 lg:text-left">
            <p>
              Bienvenue sur mon portfolio en développement web et web mobile !
            </p>
            <p>
              Passionné par la création d'expériences en ligne, j'ai acquis une
              expertise en HTML, CSS, JavaScript et React.
            </p>
            <p>
              Vous trouverez ici des projets variés sur lesquels j'ai travaillé.
            </p>
            <p>
              N'hésitez pas à explorer et à me contacter pour en savoir plus.
            </p>
            <p>Merci de votre visite !</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
