"use client";
import Image, { type StaticImageData } from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import soho_1 from "@/public/images/soho_1.jpg";
import soho_2 from "@/public/images/soho_2.jpg";
import soho_3 from "@/public/images/soho_3.jpg";
import soho_4 from "@/public/images/soho_4.jpg";
import soho_5 from "@/public/images/soho_5.jpg";
import soho_6 from "@/public/images/soho_6.jpg";
import soho_7 from "@/public/images/soho_7.jpg";
import soho_8 from "@/public/images/soho_8.jpg";
import soho_9 from "@/public/images/soho_9.jpg";
import soho_10 from "@/public/images/soho_10.jpg";
import soho_11 from "@/public/images/soho_11.jpg";
import soho_12 from "@/public/images/soho_12.jpg";
import soho_13 from "@/public/images/soho_13.jpg";
import soho_14 from "@/public/images/soho_14.jpg";
import soho_15 from "@/public/images/soho_15.jpg";
import soho_16 from "@/public/images/soho_16.jpg";
import soho_17 from "@/public/images/soho_17.jpg";
import soho_18 from "@/public/images/soho_18.jpg";

// Display order of the SOHO / Kødbyen photos
const IMAGES: StaticImageData[] = [
  soho_1, soho_7, soho_3, soho_12, soho_5, soho_9, soho_2, soho_18, soho_11,
  soho_8, soho_16, soho_4, soho_10, soho_15, soho_6, soho_14, soho_13, soho_17,
];

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section id="environment" aria-label="Billeder fra vores kontorfællesskab SOHO i Kødbyen" className="m-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {IMAGES.map((src, i) => (
            <div key={i} className="basis-full shrink-0 grow-0 min-w-0 lg:basis-6/12 xl:basis-3/12">
              <Image
                src={src}
                alt={`Kontorfællesskabet SOHO i Kødbyen, billede ${i + 1}`}
                className="size-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
