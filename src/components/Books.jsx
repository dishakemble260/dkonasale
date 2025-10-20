
import bookImage from "../assets/book.png"; 
import book_title from "../assets/book_title.png"; 


const Books = () => {

  return (
    <section
      className="w-full bg-white "
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="container"> 
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-44">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="w-32 md:w-36 h-auto mb-4">
              <img
                src={book_title}
                alt="Book small"
                className="w-full h-7 object-contain -ml-4"
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              The Latest Release "Alamort"
            </h2>

            <p className="text-base md:text-lg text-gray-700 mb-8">
              This is not just poetry, it is a reflection of feeling, a
              testimony of survival, and a quiet offering of connection from one
              soul to another.
            </p>
            <p className="font-semibold text-[#D8C4B6] text-xs mb-4">
              On sale since August, 2025
            </p>
            <p>Available on:</p>
            <div className="flex flex-row space-x-2 my-2">
              <a
                href="https://amzn.in/d/13D2ZYr"
                target="_blank"
                rel="noopener noreferrer"
                className="border-[#D8C4B6] border-1 px-4 py-2 rounded-lg font-semibold text-xs hover:bg-[#3E5879] hover:text-white cursor-pointer"
              >
                Amazon
              </a>

              <a
                href="https://dl.flipkart.com/s/CdpmK0NNNN"
                target="_blank"
                rel="noopener noreferrer"
                className="border-[#D8C4B6] border-1 px-4 py-2 rounded-lg font-semibold text-xs hover:bg-[#3E5879] hover:text-white cursor-pointer"
              >
                Flipkart
              </a>

              <a
                href="https://notionpress.com/in/read/alamort?utm_source=share_publish_email&utm_medium=whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="border-[#D8C4B6] border-1 px-4 py-2 rounded-lg font-semibold text-xs hover:bg-[#3E5879] hover:text-white cursor-pointer"
              >
                Notion Press
              </a>
            </div>
          </div>

          {/* Right: Main Book Image */}
          <div className="w-full md:w-1/3 h-64 md:h-[450px] overflow-hidden rounded-lg shadow-none">
            <img
              src={bookImage}
              alt="Book main"
              className="w-full h-full object-contain" 
            />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Books;