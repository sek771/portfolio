import { TypeAnimation } from "react-type-animation";

const Animation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Créateur de site passionné.", // Types 'One'
        3000, // Waits 1s
        "Donne vie à vos reves numériques,", // Deletes 'One' and types 'Two'
        3000, // Waits 2s
        "ligne par ligne.", // Types 'Three' without deleting 'Two'
        3000,
        "Pour vous donner une expériences",
        3000,
        "digitales et captivantes.",
        3000,

        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "1.5em", display: "inline-block", color: "yellow" }}
      className="font-aileron mx-4 text-center"
    />
  );
};

export default Animation;
