import React from "react";
import contact_title from "../assets/contact_title.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-full max-w-6xl mx-auto bg-[#F5EFE7] grid grid-cols-1 lg:grid-cols-2 gap-12 py-24 px-8 rounded-lg">
      {/* Left Section */}
      <div>
        {/* Top Image */}
        <img src={contact_title} alt="Contacts" className="w-20 mb-3" />

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-3 leading-snug">
          Let's Connect: I'm Always Eager to Hear From You
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 mb-4 max-w-md">
          If you want to share your opinion on my books or simply say hi, feel free
          contact me in any convenient way.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-3">
          <a
            href="https://www.facebook.com/people/Darshini-Konasale-Sathyananda/61580861173225/#"
            className="p-2 border border-[#3E5879] hover:bg-[#3E5879] hover:text-white rounded"
          >
            <FaFacebookF
              className="text-[#3E5879] hover:text-white"
              size={18}
            />
          </a>
          <a
            href="https://www.instagram.com/p/DOydVppEg6n/"
            className="p-2 border border-[#3E5879] hover:bg-[#3E5879] hover:text-white rounded"
          >
            <FaInstagram
              className="text-[#3E5879] hover:text-white"
              size={18}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/darshini-konasale-sathyananda-17b0b02b7/?originalSubdomain=in"
            className="p-2 border border-[#3E5879] hover:bg-[#3E5879] hover:text-white rounded"
          >
            <FaLinkedin className="text-[#3E5879] hover:text-white" size={18} />
          </a>
          <a
            href="https://www.youtube.com/@DarshiniKonasaleletters"
            className="p-2 border border-[#3E5879] hover:bg-[#3E5879] hover:text-white rounded"
          >
            <FaYoutube className="text-[#3E5879] hover:text-white" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
