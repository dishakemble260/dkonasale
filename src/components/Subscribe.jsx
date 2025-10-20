// import { useState } from "react";
// import { message } from "antd";
// import subscribe_title from "../assets/subscribe_title.png";
// import emailjs from "@emailjs/browser";

// const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
// const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
// const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

// const Subscribe = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const templateParams = {
//       name: formData.name,
//       email: formData.email,
//     };

//     emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
//       (response) => {
//         console.log("Email sent successfully!", response.status, response.text);
//         message.success("Thank you for subscribing!");
//         setFormData({ name: "", email: "" });
//       },
//       (error) => {
//         console.error("Failed to send email:", error);
//         message.error("Something went wrong. Please try again");
//       }
//     );
//   };

//   return (
//     <section className="-mt-24 py-24 px-8 rounded-lg w-full flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl border-3 border-[#D8C4B6]">
//       {/* Left Section */}
//       <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
//         <img src={subscribe_title} className="w-21 h-6 mb-4" />
//         <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//           Receive <span className="italic text-[#D8C4B6]">free</span> poems
//           straight from the author
//         </h2>

//         <p className="text-gray-600 max-w-md">
//           Subscribe to get exclusive access to original poems, sent directly to
//           your inbox at no cost.
//         </p>
//       </div>

//       {/* Right Section - Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="w-full md:w-1/3 flex flex-col gap-2"
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter your name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-[100%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter your email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-[100%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
//           required
//         />
//         <button
//           type="submit"
//           className="w-[100%] bg-[#3E5879] text-white font-semibold py-2 rounded-md hover:bg-[#213555] transition-colors cursor-pointer"
//         >
//           Subscribe
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Subscribe;
import { useState } from "react";
import { message } from "antd";
import subscribe_title from "../assets/subscribe_title.png";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Subscribe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      (response) => {
        console.log("Email sent successfully!", response.status, response.text);
        message.success("Thank you for subscribing!");
        setFormData({ name: "", email: "" });
        setIsSubmitting(false);
      },
      (error) => {
        console.error("Failed to send email:", error);
        message.error("Something went wrong. Please try again");
        setIsSubmitting(false);
      }
    );
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg md:rounded-xl border-2 md:border-3 border-[#D8C4B6] p-6 sm:p-8 md:p-10 lg:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-8 lg:gap-28">
            
            {/* Left Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 lg:w-3/5">
              {/* Title Image */}
              <div className="mb-4 md:mb-5">
                <img 
                  src={subscribe_title} 
                  alt="Subscribe title"
                  className="w-24 sm:w-18 md:w-24 h-auto object-contain" 
                />
              </div>

              {/* Heading */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-3 md:mb-4 leading-tight">
                Receive <span className="italic text-[#D8C4B6]">free</span> poems
                straight from the author
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md">
                Subscribe to get exclusive access to original poems, sent directly to
                your inbox at no cost.
              </p>
            </div>

            {/* Right Section - Form */}
            <form
              onSubmit={handleSubmit}
              className="w-full md:w-1/2 lg:w-2/5 flex flex-col gap-3 md:gap-4"
            >
              {/* Name Input */}
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D8C4B6] focus:border-transparent transition-all"
                required
                disabled={isSubmitting}
              />

              {/* Email Input */}
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D8C4B6] focus:border-transparent transition-all"
                required
                disabled={isSubmitting}
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#3E5879] text-white font-semibold py-2.5 md:py-3 text-sm md:text-base rounded-md hover:bg-[#2d4159] active:bg-[#213555] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;