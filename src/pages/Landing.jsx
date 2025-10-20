import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Books from "../components/Books";
import Reviews from "../components/Reviews";
import Subscribe from "../components/Subscribe";
import Contact from "../components/Contact";

const Landing = () => {
  const aboutRef = useRef(null);
  const booksRef = useRef(null);
  const reviewsRef = useRef(null);
  const subscribeRef = useRef(null);
  const contactRef = useRef(null);

  // ✅ Helper to scroll smoothly with offset
  const scrollToSection = (ref) => {
    if (ref?.current) {
      const elementTop = ref.current.offsetTop;
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;

      window.scrollTo({
        top: elementTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  // ✅ Handle navbar item click and scroll smoothly with offset
  const handleItemSelect = (item) => {
    if (item === "About Me") scrollToSection(aboutRef);
    if (item === "Books") scrollToSection(booksRef);
    if (item === "Reviews") scrollToSection(reviewsRef);
    if (item === "Subscribe") scrollToSection(subscribeRef);
    if (item === "Contact") scrollToSection(contactRef);
  };

  return (
    <div className="bg-[#fff] px-3 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-3 sm:py-4 md:py-8 lg:py-10">
      <Navbar onItemSelect={handleItemSelect} />

      {/* Top spacing to avoid navbar overlap */}
      <div className="pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        {/* Hero Section */}
        <section className="w-full max-w-7xl mx-auto">
          <Hero onItemSelect={handleItemSelect} />
        </section>

        {/* About Section */}
        <section
          ref={aboutRef}
          className="min-h-[80vh] flex flex-col justify-center items-center py-10 sm:py-12 md:py-16 lg:py-20"
        >
          <div className="w-full max-w-6xl">
            <About />
          </div>
        </section>

        {/* Books Section */}
        <section
          ref={booksRef}
          className="min-h-[80vh] flex flex-col justify-center items-center py-8 sm:py-12 md:py-16 bg-white"
        >
          <div className="w-full max-w-6xl">
            <Books />
          </div>
        </section>

        {/* Reviews Section */}
        <section
          ref={reviewsRef}
          className="min-h-[80vh] flex flex-col justify-center items-center py-8 sm:py-12 md:py-16 bg-white"
        >
          <div className="w-full max-w-6xl">
            <Reviews />
          </div>
        </section>

        {/* Subscribe Section */}
        <section
          ref={subscribeRef}
          className="min-h-[80vh] flex flex-col justify-center items-center py-8 sm:py-12 md:py-16 bg-white"
        >
          <div className="w-full max-w-6xl">
            <Subscribe />
          </div>
        </section>

        {/* Contact Section */}
        <section
          ref={contactRef}
          className="flex flex-col justify-center items-center py-8 sm:py-12 md:py-16 -mt-12 sm:-mt-16 md:-mt-20"
        >
          <div className="w-full max-w-6xl">
            <Contact />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
