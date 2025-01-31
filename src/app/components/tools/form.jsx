import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import emailjs from "emailjs-com";

const handleSubmit = (values, actions, setFormSubmitted) => {
  emailjs
    .sendForm(
      "service_jkgal2k",
      "template_cptamhi",
      "#contactForm",
      "YTUA3NP2-NinQox97Eih4"
    )
    .then(
      (response) => {
        console.log(
          "Email envoyé avec succès!",
          response.status,
          response.text
        );
        actions.resetForm();
        setFormSubmitted(true);
      },
      (error) => {
        console.error("Erreur lors de l'envoi de l'email:", error);
      }
    );
};

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        rgpd: false,
      }}
      onSubmit={(values, actions) =>
        handleSubmit(values, actions, setFormSubmitted)
      }
    >
      {({ isSubmitting, resetForm }) => (
        <Form
          id="contactForm"
          className="glass mb-12 pb-2 lg:grid lg:grid-cols-1 lg:py-8  lg:justify-items-center lg:w-4/6 justify-center"
        >
          <div className="lg:grid lg:grid-cols-2">
            <div className="flex flex-col items-center pt-4 ">
              <label htmlFor="firstName">Votre prénom :</label>
              <Field
                type="text"
                name="firstName"
                placeholder="Prénom"
                className="lg:w-10/12"
              />
            </div>
            <div className="flex flex-col items-center py-4">
              <label htmlFor="lastName">Votre Nom :</label>
              <Field
                type="text"
                name="lastName"
                placeholder="Nom"
                className="lg:w-10/12"
              />
            </div>
            <div className="flex flex-col items-center lg:items-center lg:col-span-3">
              <label htmlFor="email">Votre Email :</label>
              <Field
                className="lg:w-11/12"
                type="email"
                name="email"
                placeholder="E-mail"
              />
            </div>
          </div>
          <div className="flex flex-col items-center py-4 mx-6">
            <label htmlFor="message">Objet du message :</label>
            <Field
              as="textarea"
              name="message"
              id="message"
              cols="125"
              rows="10"
              className="border-2 rounded-lg w-full bg-gray-200"
              placeholder="Objet du message"
            />
          </div>
          <div className="py-4 mx-6">
            <Field type="checkbox" name="rgpd" id="rgpd" />
            <label htmlFor="rgpd">Accepter la RGPD</label>
          </div>
          <div className="py-8 grid justify-items-center wrapper">
            <button
              type="submit"
              disabled={isSubmitting || formSubmitted}
              className="bg-cyan-900 rounded-full w-20 button"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
