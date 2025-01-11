import React from "react";
import Slider from "react-slick";
import "./Certificacao.css";
import certificado from "../../assets/certificado.png";

const Certificacao = () => {
  const certificates = [
    { id: 1, src: certificado, alt: "Certificado 1" },
    { id: 2, src: certificado, alt: "Certificado 2" },
    { id: 3, src: certificado, alt: "Certificado 3" },
    { id: 4, src: certificado, alt: "Certificado 4" },
    { id: 5, src: certificado, alt: "Certificado 5" },
    { id: 6, src: certificado, alt: "Certificado 6" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="certificacao-section">
      <h2 className="certificacao-title">Certificações</h2>
      <p className="certificacao-description">Conheça nossas qualificações</p>
      <div className="certificacao-slider">
        <Slider {...settings}>
          {certificates.map((cert) => (
            <div className="certificacao-card" key={cert.id}>
              <img
                src={cert.src}
                alt={cert.alt}
                className="certificacao-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Certificacao;
