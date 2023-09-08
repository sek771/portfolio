"use client";

import { TypeAnimation } from "react-type-animation";

const IntroAnimation = () => {
  return (
    <div className="">
  <TypeAnimation
          sequence={[
            "Bonjour, je suis SEKOU SACKO",
            100,
            "Bonjour, je suis SEKOU SACKO, bienvenue sur mon portfolio en développement web et web mobile",
            100,
            "Bonjour, je suis SEKOU SACKO, bienvenue sur mon portfolio en développement web et web mobile ! Découvrez mes projets et compétences en création de sites web.",
            100,
            "Bonjour, je suis SEKOU SACKO, bienvenue sur mon portfolio en développement web et web mobile ! Découvrez mes projets et compétences en création de sites web.  Passionné par la construction de sites beaux, fonctionnels et responsive. N'hésitez pas à explorer mes projets et à me contacter pour discuter de vos idées et projets passionnants.",
            100,
          ]}
          style={{ fontSize: "2em" }}
          repeat={1}
        />
  
    </div>
  );
};

export default IntroAnimation;
//<LinearTextGradient angle={45} colors={["#fafa6e", "#39b48e"]}></LinearTextGradient>
