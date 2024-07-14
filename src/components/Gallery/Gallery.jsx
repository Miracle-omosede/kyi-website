"use client";
import React, { useState } from "react";
import Footer from "../Footer/Footer";

const Gallery = () => {
  const images = [
    "https://miracle.sirv.com/kachem-young-initiative/091d3110-8ac0-4af7-9aba-cf31003a38e1.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/98f89426-da15-4ec0-a5ba-7336bbc8903d.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/16685c08-b047-400c-bc26-ef8d22c0c430.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/59366d67-943d-4f8d-8e04-9200ec1d2166.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/1720008943309.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/1720008943326.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/1720008943336.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG-20240630-WA0057.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG-20240630-WA0060.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG-20240701-WA0023.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/f61ddc8b-f0e2-4566-b168-9d0c21b9471f.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_2868.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3014.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3016.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3019.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3020.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3025.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3030.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3033.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3037.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3039.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3040.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3046.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3070.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3084.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3116.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3133.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3148.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3156.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3160.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3164.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3166.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3173.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3954.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3959.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3972.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3981.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3990.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3991.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3992.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3996.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_3997(1).jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_4002.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_4260.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_4482.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_4484.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_4948.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_5371.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_5478.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_6778.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_6809.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_6843.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_6891.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_6898.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_6909.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_6949.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_6974.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7006.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7007.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7009.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7019.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7030.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7032.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7038.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7040.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7044.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7048.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7051.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7057.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7059.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7071.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7077.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7081.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7082.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7084.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7085.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7089.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7090.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7116.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7140.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7145.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7149.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7153.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7155.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7652.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7659.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7682.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7683.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7691.jpg",
    // "https://miracle.sirv.com/kachem-young-initiative/IMG_7696.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7703.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7704.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7706.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7709.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7711.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7720.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7723.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7724.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7735.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7740.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7754.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7756.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7786.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7790.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7793.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7802.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7804.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7806.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7811.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7816.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7821.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7829.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7830.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7831.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7834.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7835.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7836.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7837.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7839.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7842.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7855.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7856.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7863.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7865.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7866.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7867.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7872.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7876.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7879.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7888.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7889.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7891.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7901.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7902.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7906.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7913.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7915.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7916.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7917.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7919.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7923.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7925.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7926.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7928.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7930.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7931.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7934.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7939.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7943.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7946.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7947.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7952.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7953.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7967.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7971.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7973.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7974.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7981.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7982.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7985.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7988.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7989.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7990.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7994.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_7998.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_8002.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_8004.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_8006.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_8009.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_8010.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_8011.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_8014.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_8031.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_8034.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_8038.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_8039.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_8039(1).jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_8042.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_8043.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_9734.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_9745.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_9782.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_9798.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_9831.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_9836.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_9837.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_20240223_114759.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_20240312_124002.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_20240312_124041.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_20240312_124106.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_20240312_124110.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG_20240312_124120.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG-20210308-WA0012.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG-20240630-WA0034.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG-20240630-WA0036.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG-20240630-WA0044.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG-20240630-WA0046.jpg",
    "https://miracle.sirv.com/kachem-young-initiative/IMG-20240630-WA0050.jpg"
  ];

  // tell the prompt to add "IMG-20240630-WA0057" "IMG-20240630-WA0060" "IMG-20240701-WA0023" "f61ddc8b-f0e2-4566-b168-9d0c21b9471f" "IMG_2868" "IMG_3014" "IMG_3016" "IMG_3019" "IMG_3020" "IMG_3025" "IMG_3030" "IMG_3033" "IMG_3037" "IMG_3039" "IMG_3040" "IMG_3046" "IMG_3070" "IMG_3084" "IMG_3116" "IMG_3133" "IMG_3148" "IMG_3156" "IMG_3160" "IMG_3164" "IMG_3166" "IMG_3173" "IMG_3954" "IMG_3959" "IMG_3972" "IMG_3981" "IMG_3990" "IMG_3991" "IMG_3992" "IMG_3996" "IMG_3997(1)" "IMG_4002" "IMG_4260" "IMG_4482" "IMG_4484" "IMG_4948" "IMG_5371" "IMG_5478" "IMG_6778" "IMG_6809" "IMG_6843" "IMG_6891" "IMG_6898" "IMG_6909" "IMG_6949" "IMG_6974" "IMG_7006" "IMG_7007" "IMG_7009" "IMG_7019" "IMG_7030" "IMG_7032" "IMG_7038" "IMG_7040" "IMG_7044" "IMG_7048" "IMG_7051" "IMG_7057" "IMG_7059" "IMG_7071" "IMG_7077" "IMG_7081" "IMG_7082" "IMG_7084" "IMG_7085" "IMG_7089" "IMG_7090" "IMG_7116" "IMG_7140" "IMG_7145" "IMG_7149" "IMG_7153" "IMG_7155" "IMG_7652" "IMG_7659" "IMG_7682" "IMG_7683" "IMG_7691" "IMG_7696" "IMG_7703" "IMG_7704" "IMG_7706" "IMG_7709" "IMG_7711" "IMG_7720" "IMG_7723" "IMG_7724" "IMG_7735" "IMG_7740" "IMG_7754" "IMG_7756" "IMG_7786" "IMG_7790" "IMG_7793" "IMG_7802" "IMG_7804" "IMG_7806" "IMG_7811" "IMG_7816" "IMG_7821" "IMG_7829" "IMG_7830" "IMG_7831" "IMG_7834" "IMG_7835" "IMG_7836" "IMG_7837" "IMG_7839" "IMG_7842" "IMG_7855" "IMG_7856" "IMG_7863" "IMG_7865" "IMG_7866" "IMG_7867" "IMG_7872" "IMG_7876" "IMG_7879" "IMG_7888" "IMG_7889" "IMG_7891" "IMG_7901" "IMG_7902" "IMG_7906" "IMG_7913" "IMG_7915" "IMG_7916" "IMG_7917" "IMG_7919" "IMG_7923" "IMG_7925" "IMG_7926" "IMG_7928" "IMG_7930" "IMG_7931" "IMG_7934" "IMG_7939" "IMG_7943" "IMG_7946" "IMG_7947" "IMG_7952" "IMG_7953" "IMG_7967" "IMG_7971" "IMG_7973" "IMG_7974" "IMG_7981" "IMG_7982" "IMG_7985" "IMG_7988" "IMG_7989" "IMG_7990" "IMG_7994" "IMG_7998" "IMG_8002" "IMG_8004" "IMG_8006" "IMG_8009" "IMG_8010" "IMG_8011" "IMG_8014" "IMG_8031" "IMG_8034" "IMG_8038" "IMG_8039(1)" "IMG_8039" "IMG_8042" "IMG_8043" "IMG_9734" "IMG_9745" "IMG_9782" "IMG_9798" "IMG_9831" "IMG_9836" "IMG_9837" "IMG_20240223_114759" "IMG_20240312_124002" "IMG_20240312_124041" "IMG_20240312_124106" "IMG_20240312_124110" "IMG_20240312_124120" "IMG-20210308-WA0012" "IMG-20240630-WA0034" "IMG-20240630-WA0036" "IMG-20240630-WA0044" "IMG-20240630-WA0046" "IMG-20240630-WA0050" 

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
          <br/>
          <p className="md:text-[20px] text-[17px] font-normal pt-7 text-center">
            You can also can see our videos <a href="https://www.youtube.com/@kachemyounginitiative1224" className="text-red-500 underline">Here</a>.
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
