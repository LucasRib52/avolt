import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import heroSlide1 from "../../assets/5.png";
import heroSlide2 from "../../assets/7.png";
import heroSlide3 from "../../assets/8.png";
import heroSlide4 from "../../assets/2.png";
import heroSlide5 from "../../assets/3.png";

const HERO_SLIDES = [
  heroSlide1,
  heroSlide2,
  heroSlide3,
  heroSlide4,
  heroSlide5,
];

const Home = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 6000,
      stopOnInteraction: false,
    })
  );

  return (
    <section className="relative z-0 w-full overflow-visible bg-transparent group">
      <Carousel
        aria-label="Destaques AVOLT"
        plugins={[plugin.current]}
        className="w-full overflow-visible"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent className="ml-0 items-start overflow-visible">
          {HERO_SLIDES.map((src, index) => (
            <CarouselItem
              key={index}
              className="pl-0 basis-full shrink-0 overflow-visible"
            >
              <div className="relative w-full overflow-visible bg-transparent">
                <img
                  src={src}
                  alt={`Banner AVOLT — imagem ${index + 1} de ${HERO_SLIDES.length}`}
                  className="block w-full h-auto object-contain object-top select-none"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  draggable="false"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/20 hover:bg-white text-white hover:text-slate-900 border-white/30 h-14 w-14 transition-all opacity-0 group-hover:opacity-100 hidden md:flex backdrop-blur-md" />

        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/20 hover:bg-white text-white hover:text-slate-900 border-white/30 h-14 w-14 transition-all opacity-0 group-hover:opacity-100 hidden md:flex backdrop-blur-md" />
      </Carousel>
    </section>
  );
};

export default Home;