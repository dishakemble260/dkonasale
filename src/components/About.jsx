import bigImage from "../assets/about_image.png"; // replace with your large image
import smallImage from "../assets/about_title.png"; // replace with your small image

const About = () => {
  return (
    <section
      className="w-full bg-[#F5EFE7] "
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="container mx-auto px-4 md:px-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Left: Large Image */}
          <div className="w-full md:w-1/2 h-100 md:h-[650px] overflow-hidden rounded-lg shadow-none">
            <img
              src={bigImage}
              alt="Author portrait"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right: Content + small image */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="w-48 md:w-64 h-auto mb-4">
              <img src={smallImage} alt="About author" className="w-40 h-6" />
            </div>

            <p className="text-base md:text-lg text-gray-700">
              I was fifteen when words first became my escape. What began as
              scribbled verses in silence grew into a voice one that speaks of
              love, pain, and the haunting beauty of emotions too heavy to hold.
              I don’t come from an artistic or literary background. You might
              ask how I became a poet, and I could call it an accident but I
              don’t really believe in accidents. My first book, Alamort: Soft
              Burning Emotions, was never part of my plan. Yet every poem in it
              tells fragments of my life, carrying emotions that trace back to
              when I was just a child. For me, writing is not just an act it’s
              like breathing. I don’t write stories that appear randomly in my
              mind; I live them, feel them, and shape them into words. My hope
              is that if you’ve ever felt lost, broken, or unseen, you will find
              a piece of yourself in my poetry and know that you are not alone.
              I am now working on my first novel, and I know this is just the
              beginning of my artistic journey. I have a long way to go, and I
              would love for you to walk this path with me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
