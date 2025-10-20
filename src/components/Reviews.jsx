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
  const timeoutRef = useRef(null);
  const pauseTimeoutRef = useRef(null);

  const reviews = [
    {
      id: 1,
      image: review_1,
    },
    {
      id: 7,
      image: review_7,
    },
    {
      id: 2,
      image: review_2,
    },
    {
      id: 3,
      image: review_3,
    },
    {
      id: 4,
      image: review_4,
    },
    {
      id: 5,
      image: review_5,
    },
    {
      id: 6,
      image: review_6,
    },
  ];

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
    for (let i = 0; i < 3; i++) {
      indices.push((currentIndex + i) % reviews.length);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div className=" mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className=" mb-16">
          <div className="w-32 md:w-36 h-auto mb-4">
            <img
              src={reviews_title}
              alt="Book small"
              className="w-full h-5 object-contain -ml-4"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            What the Readers are Saying
          </h2>

          <p className="text-base md:text-lg text-gray-700 mb-8">
            This book has left a lasting impact on readers, and their heartfelt
            words say it all.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden px-12">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  onClick={() => handleImageClick(index)}
                  className={`flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] cursor-pointer transition-all duration-500 ${
                    index === currentIndex
                      ? "opacity-100 scale-105 z-30"
                      : visibleIndices.includes(index)
                      ? "opacity-60 scale-95 blur-[2px]"
                      : "opacity-30 scale-90 blur-sm"
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden p-4">
                    <img
                      src={review.image}
                      alt={`Review ${review.id}`}
                      className="w-full h-auto object-contain max-h-96"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => handleImageClick(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-gray-800 w-8"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
