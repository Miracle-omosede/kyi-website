"use client";
import React, { useState } from "react";
import Footer from "../Footer/Footer";

const Gallery = () => {
  const images = [
    "https://via.placeholder.com/300x300.png?text=Image+1",
    "https://via.placeholder.com/300x300.png?text=Image+2",
    "https://via.placeholder.com/300x300.png?text=Image+3",
    "https://via.placeholder.com/300x300.png?text=Image+4",
    "https://via.placeholder.com/300x300.png?text=Image+5",
    "https://via.placeholder.com/300x300.png?text=Image+6",
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

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
        </div>
        <div className="bg-white py-12 px-6 sm:px-12 lg:px-24">
          <div className="max-w-screen-lg mx-auto">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
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
