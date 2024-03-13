"use client"; // This is a client component
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import "../../public/css/base.css";
import "../../public/css/embla.css";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const images = [
    {
      original: "/images/430x370.png",
      thumbnail: "/images/430x370.png",
    },
    {
      original: "/images/430x370-dark-grey.png",
      thumbnail: "/images/430x370-dark-grey.png",
    },
    {
      original: "/images/430x370-grey.png",
      thumbnail: "/images/430x370-grey.png",
    },
    {
      original: "/images/430x370-light-grey.png",
      thumbnail: "/images/430x370-light-grey.png",
    },
  ];

  return (
    <>
      <section id="environment-mobile" className="embla md:hidden ">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index - 1}>
                <div className="embla__slide__number">
                  {
                    <Image
                      width={430}
                      height={370}
                      alt="slide"
                      src={images[index].original}
                    ></Image>
                  }
                </div>
              </div>
            ))}
            c
          </div>
        </div>
      </section>
      <section
        id="environment-desktop"
        className="hidden md:flex h-[calc(100svh-6rem)] md:flex-row md:justify-center md:items-center bg-slate-900"
      >
        <h1 className="text-white">Environment</h1>
      </section>
    </>
  );
};

export default Carousel;
