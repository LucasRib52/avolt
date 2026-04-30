import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import image1 from "../../assets/teste1.jpg";
import image2 from "../../assets/teste2.jpg";
import image3 from "../../assets/teste3.jpg";
import image4 from "../../assets/teste4.png";

const Home = () => {
  const images = [image1, image2, image3, image4];

  // Configuração do plugin Autoplay
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false })
  );

  return (
    <div className="w-full relative bg-slate-950 overflow-hidden group">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent className="ml-0">
          {images.map((src, index) => (
            <CarouselItem key={index} className="pl-0 w-full relative">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[80vh] md:h-[90vh] object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white text-white hover:text-slate-900 border-white/20 h-14 w-14 transition-all opacity-0 group-hover:opacity-100 hidden md:flex backdrop-blur-md" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white text-white hover:text-slate-900 border-white/20 h-14 w-14 transition-all opacity-0 group-hover:opacity-100 hidden md:flex backdrop-blur-md" />
      </Carousel>
    </div>
  );
};

export default Home;
