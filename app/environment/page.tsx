import Carousel from "../ui/carousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Environment() {
  return <Carousel slides={SLIDES} options={OPTIONS}></Carousel>;
}
