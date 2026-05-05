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
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white text-white hover:text-slate-900 border-white/20 h-14 w-14 transition-all opacity-0 group-hover:opacity-100 hidden md:flex backdrop-blur-md" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white text-white hover:text-slate-900 border-white/20 h-14 w-14 transition-all opacity-0 group-hover:opacity-100 hidden md:flex backdrop-blur-md" />
      </Carousel>

      <div className="absolute inset-0 z-20 bg-gradient-to-r from-slate-950/95 via-slate-900/60 to-transparent pointer-events-none" />

      <div className="absolute inset-0 z-30 flex items-center pointer-events-none">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Engenharia elétrica que garante energia <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">onde não pode falhar.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-200 leading-relaxed max-w-2xl font-light">
              Há mais de 12 anos entregando painéis elétricos, automação e infraestrutura energética para hospitais, eventos, indústrias, saneamento e comunidades em todo o Brasil.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 max-w-2xl">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4 text-sm md:text-base font-medium flex items-center gap-3 hover:bg-white/10 transition-colors">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                +12 anos de atuação
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4 text-sm md:text-base font-medium flex items-center gap-3 hover:bg-white/10 transition-colors">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                +1000 projetos entregues em 2025
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4 text-sm md:text-base font-medium flex items-center gap-3 hover:bg-white/10 transition-colors">
                <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                Atuação no RJ e em todo o Brasil
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4 text-sm md:text-base font-medium flex items-center gap-3 hover:bg-white/10 transition-colors">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                Experiência em eventos de grande porte
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
