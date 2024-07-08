"use client"; // This is a client component
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import soho_1 from "/public/images/soho_1.jpg";
import soho_2 from "/public/images/soho_2.jpg";
import soho_3 from "/public/images/soho_3.jpg";
import soho_4 from "/public/images/soho_4.jpg";
import soho_5 from "/public/images/soho_5.jpg";
import soho_6 from "/public/images/soho_6.jpg";
import soho_7 from "/public/images/soho_7.jpg";
import soho_8 from "/public/images/soho_8.jpg";
import soho_9 from "/public/images/soho_9.jpg";
import soho_10 from "/public/images/soho_10.jpg";
import soho_11 from "/public/images/soho_11.jpg";
import soho_12 from "/public/images/soho_12.jpg";
import soho_13 from "/public/images/soho_13.jpg";
import soho_14 from "/public/images/soho_14.jpg";
import soho_15 from "/public/images/soho_15.jpg";
import soho_16 from "/public/images/soho_16.jpg";
import soho_17 from "/public/images/soho_17.jpg";
import soho_18 from "/public/images/soho_18.jpg";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const images = [
    { original: soho_1, thumbnail: soho_1 },
    { original: soho_7, thumbnail: soho_7 },
    { original: soho_3, thumbnail: soho_3 },
    { original: soho_12, thumbnail: soho_12 },
    { original: soho_5, thumbnail: soho_5 },
    { original: soho_9, thumbnail: soho_9 },
    { original: soho_2, thumbnail: soho_2 },
    { original: soho_18, thumbnail: soho_18 },
    { original: soho_11, thumbnail: soho_11 },
    { original: soho_8, thumbnail: soho_8 },
    { original: soho_1, thumbnail: soho_1 },
    { original: soho_16, thumbnail: soho_16 },
    { original: soho_4, thumbnail: soho_4 },
    { original: soho_10, thumbnail: soho_10 },
    { original: soho_15, thumbnail: soho_15 },
    { original: soho_6, thumbnail: soho_6 },
    { original: soho_14, thumbnail: soho_14 },

    { original: soho_13, thumbnail: soho_13 },
    { original: soho_17, thumbnail: soho_17 },
  ];

  return (
    <>
      <section id="environment" className="m-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {slides.map((index) => (
              <div
                className="basis-full shrink-0 grow-0 min-w-0
                lg:basis-6/12
                xl:basis-3/12"
                key={index - 1}
              >
                <div className="flex justify-center items-center">
                  {
                    <Image
                      width={800}
                      height={600}
                      alt="slide"
                      src={images[index].original}
                      className="size-full object-cover"
                    ></Image>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
