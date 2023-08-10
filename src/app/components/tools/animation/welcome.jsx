import { TypeAnimation } from "react-type-animation";

const Animation = () => {
  return (
    <TypeAnimation
      sequence={[
        "bonjour", // Types 'One'
        1500, // Waits 1s
        "je suis", // Deletes 'One' and types 'Two'
        100, // Waits 2s
        "sékou", // Types 'Three' without deleting 'Two'
        1500,
        "votre",
        1500,
        "dev web",
        1500,

        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "2em", display: "inline-block", color: "red" }}
      className="font-aileron text-yellow-600"
    />
  );
};

export default Animation;
