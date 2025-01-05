import React, { useState } from "react";
import CustomButton from "./shared/Button"; 
import vectorImage from "../assets/images/contactSideImage.jpg";




const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message successfully sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  const inputClass =
    "mt-1 block w-full font-light px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary outline-primary";
  return (
    <section id="contact" className="bg-gray-50 py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Name"
                className={inputClass}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter a valid email address"
                className={inputClass}
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className={`${inputClass} resize-none`}
                rows={4}
                required
              />
            </div>
            <CustomButton
              title="Submit"
              className="w-full"
            />
          </form>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:pl-12">
          <img
            src={vectorImage}
            alt="Contact Vector"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
