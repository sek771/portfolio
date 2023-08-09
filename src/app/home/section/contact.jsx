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
        className="lg:text-center lg:flex lg:justify-center px-5"
        id="Contact"
      >
        <div className="py-8">
          <h1 className="uppercase text-center text-4xl pb-8">
            <LinearTextGradient
              angle={20}
              colors={["#A67008", "#9F6409", "#993D00", "#B02909", "#A60810"]}
            >
              Contact{" "}
            </LinearTextGradient>
          </h1>
          <Form />
        </div>
      </section>
    </>
  );
};

export default Contact;
