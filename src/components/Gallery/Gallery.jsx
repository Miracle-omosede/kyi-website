"use client";
import React, { useState } from "react";
import Footer from "../Footer/Footer";

const Gallery = () => {
  const images = [
      "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/59366d67-943d-4f8d-8e04-9200ec1d2166.jpg",
      // "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/1720008943362.jpg",
      // "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/e0431515-a57d-4083-9465-1ace1cd86e8d.jpg",
      // "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_0842.jpg",
      // "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_3014.jpg",
      // "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_3019.jpg",
      // "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_3020.jpg",
      // "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_3025.jpg",
      // "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_3030.jpg",
      // "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_3037.jpg",
      // "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_3070.jpg",
      // "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_3156.jpg",
      // "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_3158.jpg",
      // "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_4001.jpg",
      // "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_4482.jpg",
      // "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_4484.jpg",
      // "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_4948.jpg",
      "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_6778.jpg",
      "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_6809.jpg",
      "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_7030.jpg",
      "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_7802.jpg",
      "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_7811.jpg",
      "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_7865.jpg",
      "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_7891.jpg",
      "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_7901.jpg",
      "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_7925.jpg",
      "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_7971.jpg",
      "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_7991.jpg",
      "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_8039.jpg",
      "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_8045.jpg",
      "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_9734.jpg",
      "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_9745.jpg",
      "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_9782.jpg",
      "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG_9831.jpg",
      "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG-20240630-WA0044.jpg",
      "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG-20240630-WA0050.jpg",
      "https://miracle.sirv.com/kachem-young-initiative/Gallery%20images/IMG-20240630-WA0056.jpg"
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const imagesPerPage = 6;

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  const nextImage = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.indexOf(currentImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex]);
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * imagesPerPage < images.length) {
      setLoading(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setLoading(false);
      }, 500); // Simulate loading time
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setLoading(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setLoading(false);
      }, 500); // Simulate loading time
    }
  };

  const paginatedImages = images.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  return (
    <div>
      <div className="max-w-[1140px] w-full mx-auto font-poppins px-5 mt-[70px]">
        <div>
          <h1 className="md:text-[36px] text-[20px] font-semibold text-center">
            Gallery
          </h1>
        </div>
        <div>
          <p className="md:text-[20px] text-[17px] font-normal pt-7 text-center">
            Explore our world of impact and inspiration. Our gallery is a window
            into the heart of Kachem Young Initiative. From the smiles of
            empowered children to the transformative moments in our projects,
            each image tells a story of change, hope, and dedication.
          </p>
          <br />
          <p className="md:text-[20px] text-[17px] font-normal pt-7 text-center">
            You can also see our videos{" "}
            <a
              href="https://www.youtube.com/@kachemyounginitiative1224"
              className="text-red-500 underline"
            >
              Here
            </a>
            .
          </p>
        </div>
        <div className="bg-white py-12 px-6 sm:px-12 lg:px-24">
          <div className="max-w-screen-lg mx-auto">
            {loading ? (
              <div className="flex justify-center items-center h-48">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedImages.map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg shadow-lg"
                  >
                    <img
                      src={image}
                      alt={`Gallery Image ${index + 1}`}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                      onClick={() => openLightbox(image)}
                    />
                  </div>
                ))}
              </div>
            )}
            <div className="flex gap-4 mt-6">
              <button
                className="px-4 py-2 bg-[#6fe1fed3] border-secondary border-2 text-secondary rounded-[6px]  disabled:opacity-50"
                onClick={handlePrevPage}
                disabled={currentPage === 0 || loading}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
              <button
                className="px-4 py-2 bg-[#6fe1fed3] border-secondary border-2 text-secondary rounded-[6px] "
                onClick={handleNextPage}
                disabled={
                  (currentPage + 1) * imagesPerPage >= images.length || loading
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {lightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative">
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={closeLightbox}
              >
                &times;
              </button>
              <img
                src={currentImage}
                alt="Lightbox"
                className="max-w-full max-h-full"
              />
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
                onClick={prevImage}
              >
                &lt;
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
                onClick={nextImage}
              >
                &gt;
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
