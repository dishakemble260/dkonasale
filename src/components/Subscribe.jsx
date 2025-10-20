import { useState } from "react";
import { message } from "antd";
import subscribe_title from "../assets/subscribe_title.png";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_i4tbq8t";
const TEMPLATE_ID = "template_ke0jxp4";
const PUBLIC_KEY = "8E5C-T-GOHWiwf3aJ";

const Subscribe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      (response) => {
        console.log("Email sent successfully!", response.status, response.text);
        message.success("Thank you for subscribing!");
        setFormData({ name: "", email: "" });
      },
      (error) => {
        console.error("Failed to send email:", error);
        message.error("Something went wrong. Please try again");
      }
    );
  };

  return (
    <section className="-mt-24 py-24 px-8 rounded-lg w-full flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl border-3 border-[#D8C4B6]">
      {/* Left Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
        <img src={subscribe_title} className="w-21 h-6 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Receive <span className="italic text-[#D8C4B6]">free</span> poems
          straight from the author
        </h2>

        <p className="text-gray-600 max-w-md">
          Subscribe to get exclusive access to original poems, sent directly to
          your inbox at no cost.
        </p>
      </div>

      {/* Right Section - Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/3 flex flex-col gap-2"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="w-[100%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-[100%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          required
        />
        <button
          type="submit"
          className="w-[100%] bg-[#3E5879] text-white font-semibold py-2 rounded-md hover:bg-[#213555] transition-colors cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Subscribe;
