import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Navbar = ({ onItemSelect }) => {
  const navItems = ["About Me", "Books", "Reviews", "Subscribe", "Contact"];

  return (
    <nav className="top-0 left-0 w-full bg-[#fff] px-16 py-1 z-10 flex justify-between items-center">
      {/* Navigation Items (will be on the left) */}
      <div className="space-x-8">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => onItemSelect(item)}
            className="text-[#333] font-semibold hover:text-[#D8C4B6] cursor-pointer transition-colors duration-200"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Social Media Icons (will be pushed to the right) */}
      <div className="flex space-x-3">
        <a
          href="https://www.facebook.com/people/Darshini-Konasale-Sathyananda/61580861173225/#"
          className="p-2 border border-[#3E5879] hover:bg-[#3E5879] hover:text-white rounded"
        >
          <FaFacebookF
            className="text-[#3E5879] hover:hover:text-white" // Corrected hover class
            size={18}
          />
        </a>
        <a
          href="https://www.instagram.com/p/DOydVppEg6n/"
          className="p-2 border border-[#3E5879] hover:bg-[#3E5879] hover:text-white rounded"
        >
          <FaInstagram
            className="text-[#3E5879] hover:hover:text-white" // Corrected hover class
            size={18}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/darshini-konasale-sathyananda-17b0b02b7/?originalSubdomain=in"
          className="p-2 border border-[#3E5879] hover:bg-[#3E5879] hover:text-white rounded"
        >
          <FaLinkedin className="text-[#3E5879] hover:hover:text-white" size={18} /> {/* Corrected hover class */}
        </a>
        <a
          href="https://www.youtube.com/@DarshiniKonasaleletters"
          className="p-2 border border-[#3E5879] hover:bg-[#3E5879] hover:text-white rounded"
        >
          <FaYoutube className="text-[#3E5879] hover:hover:text-white" size={18} /> {/* Corrected hover class */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;