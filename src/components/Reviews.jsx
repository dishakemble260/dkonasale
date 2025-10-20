// import { useState, useEffect, useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import review_1 from "../assets/Reviews/review_1.jpg";
// import review_2 from "../assets/Reviews/review_2.jpg";
// import review_3 from "../assets/Reviews/review_3.jpg";
// import review_4 from "../assets/Reviews/review_4.jpg";
// import review_5 from "../assets/Reviews/review_5.jpg";
// import review_6 from "../assets/Reviews/review_6.jpg";
// import review_7 from "../assets/Reviews/review_7.jpg";
// import reviews_title from "../assets/reviews_title.png";

// export default function Reviews() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const timeoutRef = useRef(null);
//   const pauseTimeoutRef = useRef(null);

//   const reviews = [
//     {
//       id: 1,
//       image: review_1,
//     },
//     {
//       id: 7,
//       image: review_7,
//     },
//     {
//       id: 2,
//       image: review_2,
//     },
//     {
//       id: 3,
//       image: review_3,
//     },
//     {
//       id: 4,
//       image: review_4,
//     },
//     {
//       id: 5,
//       image: review_5,
//     },
//     {
//       id: 6,
//       image: review_6,
//     },
//   ];

//   useEffect(() => {
//     if (!isPaused) {
//       timeoutRef.current = setTimeout(() => {
//         setCurrentIndex((prev) => (prev + 1) % reviews.length);
//       }, 7000);
//     }

//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, [currentIndex, isPaused, reviews.length]);

//   const handleImageClick = (index) => {
//     setCurrentIndex(index);
//     setIsPaused(true);

//     if (pauseTimeoutRef.current) {
//       clearTimeout(pauseTimeoutRef.current);
//     }

//     pauseTimeoutRef.current = setTimeout(() => {
//       setIsPaused(false);
//     }, 5000);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
//     setIsPaused(true);
//     if (pauseTimeoutRef.current) {
//       clearTimeout(pauseTimeoutRef.current);
//     }
//     pauseTimeoutRef.current = setTimeout(() => {
//       setIsPaused(false);
//     }, 5000);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % reviews.length);
//     setIsPaused(true);
//     if (pauseTimeoutRef.current) {
//       clearTimeout(pauseTimeoutRef.current);
//     }
//     pauseTimeoutRef.current = setTimeout(() => {
//       setIsPaused(false);
//     }, 5000);
//   };

//   const getVisibleIndices = () => {
//     const indices = [];
//     for (let i = 0; i < 3; i++) {
//       indices.push((currentIndex + i) % reviews.length);
//     }
//     return indices;
//   };

//   const visibleIndices = getVisibleIndices();

//   return (
//     <div className=" mt-12">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className=" mb-16">
//           <div className="w-32 md:w-36 h-auto mb-4">
//             <img
//               src={reviews_title}
//               alt="Book small"
//               className="w-full h-5 object-contain -ml-4"
//             />
//           </div>

//           <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
//             What the Readers are Saying
//           </h2>

//           <p className="text-base md:text-lg text-gray-700 mb-8">
//             This book has left a lasting impact on readers, and their heartfelt
//             words say it all.
//           </p>
//         </div>

//         {/* Carousel Container */}
//         <div className="relative">
//           {/* Left Arrow */}
//           <button
//             onClick={handlePrev}
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
//           >
//             <ChevronLeft className="w-6 h-6 text-gray-600" />
//           </button>

//           {/* Cards Container */}
//           <div className="overflow-hidden px-12">
//             <div
//               className="flex gap-6 transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
//             >
//               {reviews.map((review, index) => (
//                 <div
//                   key={review.id}
//                   onClick={() => handleImageClick(index)}
//                   className={`flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] cursor-pointer transition-all duration-500 ${
//                     index === currentIndex
//                       ? "opacity-100 scale-105 z-30"
//                       : visibleIndices.includes(index)
//                       ? "opacity-60 scale-95 blur-[2px]"
//                       : "opacity-30 scale-90 blur-sm"
//                   }`}
//                 >
//                   <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden p-4">
//                     <img
//                       src={review.image}
//                       alt={`Review ${review.id}`}
//                       className="w-full h-auto object-contain max-h-96"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* Right Arrow */}
//           <button
//             onClick={handleNext}
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
//           >
//             <ChevronRight className="w-6 h-6 text-gray-600" />
//           </button>
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center gap-2 mt-6">
//           {reviews.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleImageClick(index)}
//               className={`h-2 rounded-full transition-all ${
//                 index === currentIndex
//                   ? "bg-gray-800 w-8"
//                   : "bg-gray-300 w-2 hover:bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import review_1 from "../assets/Reviews/review_1.jpg";
import review_2 from "../assets/Reviews/review_2.jpg";
import review_3 from "../assets/Reviews/review_3.jpg";
import review_4 from "../assets/Reviews/review_4.jpg";
import review_5 from "../assets/Reviews/review_5.jpg";
import review_6 from "../assets/Reviews/review_6.jpg";
import review_7 from "../assets/Reviews/review_7.jpg";
import reviews_title from "../assets/reviews_title.png";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef(null);
  const pauseTimeoutRef = useRef(null);

  const reviews = [
    { id: 1, image: review_1 },
    { id: 7, image: review_7 },
    { id: 2, image: review_2 },
    { id: 3, image: review_3 },
    { id: 4, image: review_4 },
    { id: 5, image: review_5 },
    { id: 6, image: review_6 },
  ];

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
      }, 7000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isPaused, reviews.length]);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsPaused(true);
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsPaused(true);
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const getVisibleIndices = () => {
    const indices = [];
    const visibleCount = isMobile ? 1 : 3;
    for (let i = 0; i < visibleCount; i++) {
      indices.push((currentIndex + i) % reviews.length);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  // Calculate translate percentage based on screen size
  const getTranslatePercentage = () => {
    if (isMobile) return 100; // Full width on mobile
    return 33.333; // 1/3 width on desktop
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto sm:my-0">
        {/* Header */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          {/* Title Image */}
          <div className="mb-2 md:mb-4">
            <img
              src={reviews_title}
              alt="Reviews title"
              className="w-28 sm:w-30 md:w-32 h-auto object-contain"
            />
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-3 md:mb-4">
            What the Readers are Saying
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl">
            This book has left a lasting impact on readers, and their heartfelt
            words say it all.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow - Hidden on mobile */}
          <button
            onClick={handlePrev}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-40 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden px-0 md:px-8 lg:px-12">
            <div
              className="flex gap-3 sm:gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * getTranslatePercentage()}%)` 
              }}
            >
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  onClick={() => handleImageClick(index)}
                  className={`flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] cursor-pointer transition-all duration-500 ${
                    index === currentIndex
                      ? "opacity-100 scale-100 md:scale-105 z-30"
                      : visibleIndices.includes(index)
                      ? "opacity-60 scale-95 blur-[1px] md:blur-[2px]"
                      : "opacity-0 md:opacity-30 scale-90 blur-sm"
                  }`}
                >
                  <div className="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all overflow-hidden p-3 ">
                    <img
                      src={review.image}
                      alt={`Review ${review.id}`}
                      className="w-full h-auto object-contain max-h-64 sm:max-h-50 md:max-h-96"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow - Hidden on mobile */}
          <button
            onClick={handleNext}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-40 bg-white rounded-full  md:p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>

          {/* Mobile Navigation Arrows */}
          <div className="flex md:hidden justify-between items-center mt-4 px-4">
            <button
              onClick={handlePrev}
              className="bg-white rounded-full p-2.5 shadow-md hover:shadow-lg transition-all active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white rounded-full p-2.5 shadow-md hover:shadow-lg transition-all active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-2 sm:mt-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => handleImageClick(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-gray-800 w-6 sm:w-8"
                  : "bg-gray-300 w-1.5 sm:w-2 hover:bg-gray-400"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}