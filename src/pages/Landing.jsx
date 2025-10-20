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

  // ✅ Handle navbar item click and scroll smoothly
  const handleItemSelect = (item) => {
    let sectionRef;
    if (item === "About Me") sectionRef = aboutRef;
    if (item === "Books") sectionRef = booksRef;
    if (item === "Reviews") sectionRef = reviewsRef;
    if (item === "Subscribe") sectionRef = subscribeRef;
    if (item === "Contact") sectionRef = contactRef;

    sectionRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#fff] px-2 sm:px-2 md:px-8 lg:px-16 py-2 sm:py-2 md:py-8 lg:py-8">
      <Navbar onItemSelect={handleItemSelect} />
      <div className="pt-20">
        {" "}
        {/* to avoid navbar overlap */}
        <Hero onItemSelect={handleItemSelect} />
        {/* About Section */}
        <section
          ref={aboutRef}
          className="min-h-screen flex flex-col justify-center items-center py-12"
        >
          <About />
        </section>
        {/* Books Section */}
        <section
          ref={booksRef}
          className="min-h-screen flex flex-col justify-center items-center py-8 bg-white"
        >
          <Books />
        </section>
        {/* Reviews Section */}
        <section
          ref={reviewsRef}
          className="min-h-screen flex flex-col justify-center items-center pt-4 bg-white"
        >
          <Reviews />
        </section>
        {/* subscribe Section */}
        <section
          ref={subscribeRef}
          className="min-h-screen flex flex-col justify-center items-center bg-white"
        >
          <Subscribe />
        </section>
        {/* Contact Section */}
        <section
          ref={contactRef}
          className="flex flex-col justify-center items-center -mt-24"
        >
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Landing;
