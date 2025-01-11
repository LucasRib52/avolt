import React, { useState, useEffect } from "react";
import "./Home.css";

import image1 from "../../assets/teste1.jpg";
import image2 from "../../assets/teste2.jpg";
import image3 from "../../assets/teste3.jpg";
import image4 from "../../assets/teste4.png";

const Home = () => {
  const images = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(1); // Começa na 1ª imagem "duplicada"
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Duplicamos o array para criar um loop contínuo
  const loopedImages = [images[images.length - 1], ...images, images[0]];

  // Troca automática de imagens
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Verifica se o índice precisa ser redefinido para manter o loop contínuo
  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length);
      }, 500); // Tempo da transição
    } else if (currentIndex === loopedImages.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 500); // Tempo da transição
    } else {
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [currentIndex, loopedImages.length, images.length]);

  return (
    <div className="home">
      <div className="carousel">
        <div
          className="carousel-images"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          }}
        >
          {loopedImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className="carousel-image"
              loading="lazy"
            />
          ))}
        </div>
        <button className="carousel-button prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="carousel-button next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Home;
