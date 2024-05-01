"use client"; // This is a client component
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const images = [
    {
      original: "/images/soho_1.jpg",
      thumbnail: "/images/soho_1.jpg",
    },
    {
      original: "/images/soho_2.jpg",
      thumbnail: "/images/soho_2.jpg",
    },
    {
      original: "/images/soho_3.jpg",
      thumbnail: "/images/soho_3.jpg",
    },
    {
      original: "/images/soho_4.jpg",
      thumbnail: "/images/soho_4.jpg",
    },
    {
      original: "/images/soho_5.jpg",
      thumbnail: "/images/soho_5.jpg",
    },
    {
      original: "/images/soho_6.jpg",
      thumbnail: "/images/soho_6.jpg",
    },
    {
      original: "/images/soho_7.jpg",
      thumbnail: "/images/soho_7.jpg",
    },
    {
      original: "/images/soho_8.jpg",
      thumbnail: "/images/soho_8.jpg",
    },
    {
      original: "/images/soho_9.jpg",
      thumbnail: "/images/soho_9.jpg",
    },
    {
      original: "/images/soho_10.jpg",
      thumbnail: "/images/soho_10.jpg",
    },
    {
      original: "/images/soho_11.jpg",
      thumbnail: "/images/soho_11.jpg",
    },
    {
      original: "/images/soho_12.jpg",
      thumbnail: "/images/soho_12.jpg",
    },
    {
      original: "/images/soho_13.jpg",
      thumbnail: "/images/soho_13.jpg",
    },
  ];

  return (
    <>
      <section id="environment" className="m-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {slides.map((index) => (
              <div
                className="basis-full shrink-0 grow-0 min-w-0
                md:basis-6/12
                xl:basis-3/12"
                key={index - 1}
              >
                <div className="flex justify-center items-center">
                  {
                    <Image
                      width={430}
                      height={370}
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
