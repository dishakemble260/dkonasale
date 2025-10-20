
// import bookImage from "../assets/book.png"; 
// import book_title from "../assets/book_title.png"; 


// const Books = () => {

//   return (
//     <section
//       className="w-full bg-white "
//       style={{ fontFamily: "Poppins, sans-serif" }}
//     >
//       <div className="container"> 
//         <div className="flex flex-col md:flex-row items-center gap-12 md:gap-44">
//           <div className="w-full md:w-1/2 flex flex-col justify-center">
//             <div className="w-32 md:w-36 h-auto mb-4">
//               <img
//                 src={book_title}
//                 alt="Book small"
//                 className="w-full h-7 object-contain -ml-4"
//               />
//             </div>

//             <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
//               The Latest Release "Alamort"
//             </h2>

//             <p className="text-base md:text-lg text-gray-700 mb-8">
//               This is not just poetry, it is a reflection of feeling, a
//               testimony of survival, and a quiet offering of connection from one
//               soul to another.
//             </p>
//             <p className="font-semibold text-[#D8C4B6] text-xs mb-4">
//               On sale since August, 2025
//             </p>
//             <p>Available on:</p>
//             <div className="flex flex-row space-x-2 my-2">
//               <a
//                 href="https://amzn.in/d/13D2ZYr"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="border-[#D8C4B6] border-1 px-4 py-2 rounded-lg font-semibold text-xs hover:bg-[#3E5879] hover:text-white cursor-pointer"
//               >
//                 Amazon
//               </a>

//               <a
//                 href="https://dl.flipkart.com/s/CdpmK0NNNN"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="border-[#D8C4B6] border-1 px-4 py-2 rounded-lg font-semibold text-xs hover:bg-[#3E5879] hover:text-white cursor-pointer"
//               >
//                 Flipkart
//               </a>

//               <a
//                 href="https://notionpress.com/in/read/alamort?utm_source=share_publish_email&utm_medium=whatsapp"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="border-[#D8C4B6] border-1 px-4 py-2 rounded-lg font-semibold text-xs hover:bg-[#3E5879] hover:text-white cursor-pointer"
//               >
//                 Notion Press
//               </a>
//             </div>
//           </div>

//           {/* Right: Main Book Image */}
//           <div className="w-full md:w-1/3 h-64 md:h-[450px] overflow-hidden rounded-lg shadow-none">
//             <img
//               src={bookImage}
//               alt="Book main"
//               className="w-full h-full object-contain" 
//             />
//           </div>
//         </div>
//       </div>
      
//     </section>
//   );
// };

// export default Books;
import bookImage from "../assets/book.png"; 
import book_title from "../assets/book_title.png"; 

const Books = () => {
  return (
    <section
      className="w-full bg-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="container"> 
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-14 xl:gap-18">
          
          {/* Left: Content */}
          <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center order-2 md:order-1">
            {/* Title Image */}
            <div className="mb-2 md:mb-4">
              <img
                src={book_title}
                alt="Book title"
                className="w-28 sm:w-32 md:w-36 h-auto object-contain"
              />
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-3 md:mb-4">
              The Latest Release "Alamort"
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
              This is not just poetry, it is a reflection of feeling, a
              testimony of survival, and a quiet offering of connection from one
              soul to another.
            </p>

            {/* Sale Date */}
            <p className="font-semibold text-[#D8C4B6] text-xs sm:text-sm mb-3 md:mb-4">
              On sale since August, 2025
            </p>

            {/* Available On Label */}
            <p className="text-sm sm:text-base font-medium text-gray-700 mb-2 md:mb-3">
              Available on:
            </p>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-2 md:gap-3">
              <a
                href="https://amzn.in/d/13D2ZYr"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#D8C4B6] px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm text-[#333] hover:bg-[#3E5879] hover:text-white hover:border-[#3E5879] cursor-pointer transition-colors duration-200 text-center"
              >
                Amazon
              </a>

              <a
                href="https://dl.flipkart.com/s/CdpmK0NNNN"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#D8C4B6] px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm text-[#333] hover:bg-[#3E5879] hover:text-white hover:border-[#3E5879] cursor-pointer transition-colors duration-200 text-center"
              >
                Flipkart
              </a>

              <a
                href="https://notionpress.com/in/read/alamort?utm_source=share_publish_email&utm_medium=whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#D8C4B6] px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm text-[#333] hover:bg-[#3E5879] hover:text-white hover:border-[#3E5879] cursor-pointer transition-colors duration-200 text-center"
              >
                Notion Press
              </a>
            </div>
          </div>

          {/* Right: Book Image */}
          <div className="w-full sm:w-3/4 md:w-2/5 lg:w-1/3 h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center order-1 md:order-2">
            <img
              src={bookImage}
              alt="Alamort book cover"
              className="w-full h-full object-contain " 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;