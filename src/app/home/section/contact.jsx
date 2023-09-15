import Form from "@/app/components/tools/form";

import {
  LinearTextGradient,
  RadialTextGradient,
  ConicTextGradient,
} from "react-text-gradients-and-animations";

const Contact = () => {
  return (
    <>
      <section
        className="mx-4"
        id="Contact">
        <div className="py-8">
          <h1 className="uppercase text-center text-4xl pb-8 neon">Contact </h1>
          <div className=" lg:flex lg:justify-center">
            <Form />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
