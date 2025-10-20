// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedin,
//   FaYoutube,
// } from "react-icons/fa";

// const Navbar = ({ onItemSelect }) => {
//   const navItems = ["About Me", "Books", "Reviews", "Subscribe", "Contact"];

//   return (
//     <nav className="top-0 left-0 w-full bg-[#fff] px-16 py-1 z-10 flex justify-between items-center">
//       {/* Navigation Items (will be on the left) */}
//       <div className="space-x-8">
//         {navItems.map((item) => (
//           <button
//             key={item}
//             onClick={() => onItemSelect(item)}
//             className="text-[#333] font-semibold hover:text-[#D8C4B6] cursor-pointer transition-colors duration-200"
//           >
//             {item}
//           </button>
//         ))}
//       </div>

//       {/* Social Media Icons (will be pushed to the right) */}
//       <div className="flex space-x-3">
//         <a
//           href="https://www.facebook.com/people/Darshini-Konasale-Sathyananda/61580861173225/#"
//           className="p-2 border border-[#3E5879] hover:bg-[#3E5879] hover:text-white rounded"
//         >
//           <FaFacebookF
//             className="text-[#3E5879] hover:hover:text-white" // Corrected hover class
//             size={18}
//           />
//         </a>
//         <a
//           href="https://www.instagram.com/p/DOydVppEg6n/"
//           className="p-2 border border-[#3E5879] hover:bg-[#3E5879] hover:text-white rounded"
//         >
//           <FaInstagram
//             className="text-[#3E5879] hover:hover:text-white" // Corrected hover class
//             size={18}
//           />
//         </a>
//         <a
//           href="https://www.linkedin.com/in/darshini-konasale-sathyananda-17b0b02b7/?originalSubdomain=in"
//           className="p-2 border border-[#3E5879] hover:bg-[#3E5879] hover:text-white rounded"
//         >
//           <FaLinkedin className="text-[#3E5879] hover:hover:text-white" size={18} /> {/* Corrected hover class */}
//         </a>
//         <a
//           href="https://www.youtube.com/@DarshiniKonasaleletters"
//           className="p-2 border border-[#3E5879] hover:bg-[#3E5879] hover:text-white rounded"
//         >
//           <FaYoutube className="text-[#3E5879] hover:hover:text-white" size={18} /> {/* Corrected hover class */}
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ onItemSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["About Me", "Books", "Reviews", "Subscribe", "Contact"];

  const handleItemClick = (item) => {
    onItemSelect(item);
    setIsMenuOpen(false); // Close mobile menu after selection
  };

  return (
    <nav className="top-0 left-0 w-full bg-[#fff] sm:px-4 lg:px-16 py-4 z-10">
      <div className="flex justify-between items-center">
        {/* Desktop Navigation Items */}
        <div className="hidden lg:flex space-x-8">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-[#333] p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        {/* Social Media Icons - Desktop */}
        <div className="hidden lg:flex space-x-3">
          <a
            href="https://www.facebook.com/people/Darshini-Konasale-Sathyananda/61580861173225/#"
            className="p-2 border border-[#3E5879] hover:bg-[#3E5879] rounded transition-colors duration-200 group"
          >
            <FaFacebookF
              className="text-[#3E5879] group-hover:text-white transition-colors duration-200"
              size={18}
            />
          </a>
          <a
           href="https://www.instagram.com/p/DOydVppEg6n/"
            className="p-2 border border-[#3E5879] hover:bg-[#3E5879] rounded transition-colors duration-200 group">
          
            <FaInstagram
              className="text-[#3E5879] group-hover:text-white transition-colors duration-200"
              size={18}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/darshini-konasale-sathyananda-17b0b02b7/?originalSubdomain=in"
            className="p-2 border border-[#3E5879] hover:bg-[#3E5879] rounded transition-colors duration-200 group"
          >
            <FaLinkedin
              className="text-[#3E5879] group-hover:text-white transition-colors duration-200"
              size={18}
            />
          </a>
          <a
            href="https://www.youtube.com/@DarshiniKonasaleletters"
            className="p-2 border border-[#3E5879] hover:bg-[#3E5879] rounded transition-colors duration-200 group"
          >
            <FaYoutube
              className="text-[#3E5879] group-hover:text-white transition-colors duration-200"
              size={18}
            />
          </a>
        </div>

        {/* Social Media Icons - Mobile (visible on small screens) */}
        <div className="flex lg:hidden space-x-2">
          <a
            href="https://www.facebook.com/people/Darshini-Konasale-Sathyananda/61580861173225/#"
            className="p-2 border border-[#3E5879] hover:bg-[#3E5879] rounded transition-colors duration-200 group"
          >
            <FaFacebookF
              className="text-[#3E5879] group-hover:text-white transition-colors duration-200"
              size={16}
            />
          </a>
          <a
            href="https://www.instagram.com/p/DOydVppEg6n/"
            className="p-2 border border-[#3E5879] hover:bg-[#3E5879] rounded transition-colors duration-200 group"
          >
            <FaInstagram
              className="text-[#3E5879] group-hover:text-white transition-colors duration-200"
              size={16}
            />
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
          <div className="flex flex-col space-y-3 pt-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleItemClick(item)}
                className="text-[#333] font-semibold hover:text-[#D8C4B6] cursor-pointer transition-colors duration-200 text-left py-2"
              >
                {item}
              </button>
            ))}
            {/* Additional social icons in mobile menu */}
            <div className="flex space-x-3 pt-4 border-t border-gray-200">
              <a
                href="https://www.linkedin.com/in/darshini-konasale-sathyananda-17b0b02b7/?originalSubdomain=in"
                className="p-2 border border-[#3E5879] hover:bg-[#3E5879] rounded transition-colors duration-200 group"
              >
                <FaLinkedin
                  className="text-[#3E5879] group-hover:text-white transition-colors duration-200"
                  size={18}
                />
              </a>
              <a
                href="https://www.youtube.com/@DarshiniKonasaleletters"
                className="p-2 border border-[#3E5879] hover:bg-[#3E5879] rounded transition-colors duration-200 group"
              >
                <FaYoutube
                  className="text-[#3E5879] group-hover:text-white transition-colors duration-200"
                  size={18}
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;