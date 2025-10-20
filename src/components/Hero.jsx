import React from "react";
import heroImage from "../assets/hero_image.png"; // 🖼️ Main hero image (Right side)
import hero_title from "../assets/hero_title.png"; // 🖼️ First small image (Below text)
import logo_1 from "../assets/logo_1.png"; // 🖼️ Second small image (Below text)

const Hero = ({ onItemSelect }) => {
  return (
    <section className="flex flex-col md:flex-row w-full h-[500px] bg-white">
      {/* Left Section - Text + Small Images */}
      <div className="w-full md:w-1/2 flex flex-col justify-end p-4 md:p-8">
        {/* Small Images Row */}
        <div>
          <img
            src={hero_title}
            alt="Small 1"
            className="w-80 h-6 object-contain -ml-9"
          />
        </div>
        <div>
          <img
            src={logo_1}
            alt="Small 2"
            className="w-full h-12 object-contain"
          />
        </div>
        <div>
          <p className="my-4 text-md">
            Writing poems that whisper and stories that stay, for readers who
            love to feel every words
          </p>
        </div>
        <div className="flex flex-row gap-6 mt-5 mb-8">
          <button
            onClick={() => onItemSelect("About Me")}
            className="border-[#3E5879] border-1 px-6 py-4 rounded-lg font-semibold text-md bg-[#3E5879] hover:bg-[#546a87] text-white cursor-pointer"
          >
            About Me
          </button>
          <button  onClick={() => onItemSelect("Books")} className="border-[#3E5879] border-1 px-6 py-4 rounded-lg font-semibold text-md hover:bg-[#3E5879] hover:text-white cursor-pointer">
            Buy Books
          </button>
        </div>
      </div>

      {/* Right Section - Main Image */}
      <div className="w-full md:w-1/2 h-[300px] md:h-full">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
