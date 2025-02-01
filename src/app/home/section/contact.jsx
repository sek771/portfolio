"use client";

import Form from "@/app/components/tools/form";

const Contact = () => {
  return (
    <section className="text-center bg-gray-900" id="contact">
      <h1 className="text-4xl neon uppercase mb-6">Contact</h1>
      <div className="flex justify-center">
        <div className="glass lg:w-4/6 p-6 rounded-lg shadow-lg bg-gray-900 border border-gray-700">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
