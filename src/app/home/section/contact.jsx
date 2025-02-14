"use client";

import Form from "@/app/components/tools/form";

const Contact = () => {
  return (
    <section className="text-center bg-gray-900 py-16" id="contact">
      <h1
        className="text-3xl md:text-4xl font-bold mb-12"
        style={{ color: "#b28c2f" }}
      >
        Contact
      </h1>
      <div className="flex justify-center">
        <div className="flex justify-center lg:w-4/6 p-6 rounded-lg shadow-lg bg-gray-800 border border-[#b28c2f] ">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
