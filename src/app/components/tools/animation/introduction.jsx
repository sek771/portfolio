import { TypeAnimation } from "react-type-animation";

const IntroAnimation = () => {
  return (
    <div className="mx-24 my-24">
      <TypeAnimation
        sequence={[
          "Bonjour, je suis SEKOU SACKO",
          500,
          "Bonjour, je suis SEKOU SACKO, bienvenue sur mon portfolio en développement web et web mobile",
          500,
          "Bonjour, je suis SEKOU SACKO, bienvenue sur mon portfolio en développement web et web mobile ! Découvrez mes projets et compétences en création de sites web.",
          500,
          "Bonjour, je suis SEKOU SACKO, bienvenue sur mon portfolio en développement web et web mobile ! Découvrez mes projets et compétences en création de sites web.  Passionné par la construction de sites beaux, fonctionnels et responsive. N'hésitez pas à explorer mes projets et à me contacter pour discuter de vos idées et projets passionnants.",
          500,
        ]}
        style={{ fontSize: "2em" }}
        repeat={1}
      />
    </div>
  );
};

export default IntroAnimation;
//className=" text-3xl text-center lg:px-40 pb-5 mx-4 lg:grid lg:justify-items-center"