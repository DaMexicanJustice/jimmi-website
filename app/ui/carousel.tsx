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
      <section id="environment" className="m-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {slides.map((index) => (
              <div
                className="basis-full shrink-0 grow-0 min-w-0
                md:basis-6/12"
                key={index - 1}
              >
                <div className="flex justify-center items-center">
                  {
                    <Image
                      width={430}
                      height={370}
                      alt="slide"
                      src={images[index].original}
                      className="w-full"
                    ></Image>
                  }
                </div>
              </div>
            ))}
            c
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
