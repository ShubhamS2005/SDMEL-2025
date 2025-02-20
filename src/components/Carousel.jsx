import React, { useEffect, useState } from "react";

const Carousel = () => {
  const images = [
    "https://content.jdmagicbox.com/comp/roorkee/l7/9999p1332.1332.110509142944.a2l7/catalogue/roorkee-college-of-engineering-roorkee-colleges-1omg9ydtp9.jpg",
    "https://huroorkee.ac.in/assets/img/about_us/infra/infra2.jpg",
    "https://huroorkee.ac.in/assets/img/gallery/images/Campus_View/haridwar_university_photos3.jpg",
    "https://huroorkee.ac.in/assets/img/academics/overview2.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full mt-10 max-w-7xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg h-[500px] sm:h-[550px] md:h-[600px] lg:h-[700px] relative">
        <div
          className="whitespace-nowrap transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="inline-block w-full h-full">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-90 transition duration-300 shadow-lg"
      >
        ❮
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-90 transition duration-300 shadow-lg"
      >
        ❯
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white scale-125" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
