"use client";

import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col space-y-8 p-6 bg-gray-800 rounded-lg shadow-lg"
    >
      {/* Input Name */}
      <div>
        <label htmlFor="name" className="text-lg font-medium text-gray-200">
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Entrez votre nom"
          className="w-full mt-2 p-4 bg-gray-700 text-white rounded-lg border-2 border-transparent focus:border-[#F2C164] focus:ring-2 focus:ring-[#F2C164] transition-all duration-300"
        />
      </div>

      {/* Input Email */}
      <div>
        <label htmlFor="email" className="text-lg font-medium text-gray-200">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Entrez votre email"
          className="w-full mt-2 p-4 bg-gray-700 text-white rounded-lg border-2 border-transparent focus:border-[#F2C164] focus:ring-2 focus:ring-[#F2C164] transition-all duration-300"
        />
      </div>

      {/* Input Message */}
      <div>
        <label htmlFor="message" className="text-lg font-medium text-gray-200">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Écrivez votre message"
          rows={5}
          className="w-full mt-2 p-4 bg-gray-700 text-white rounded-lg border-2 border-transparent focus:border-[#F2C164] focus:ring-2 focus:ring-[#F2C164] transition-all duration-300"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 py-3 bg-[#F2C164] text-white text-xl font-bold rounded-lg hover:bg-[#b28c2f] focus:ring-2 focus:ring-[#F2C164] transition-all duration-300"
      >
        Envoyer
      </button>
    </form>
  );
};

export default Form;
