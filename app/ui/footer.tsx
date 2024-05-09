"use client"; // This is a client component
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FaLinkedin, FaCopyright } from "react-icons/fa";
import { useState } from "react";

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer id="footer" className="bottom-0 left-0 text-white bg-navy-950">
        {/* Mobile up to md:breakpoint */}
        <div className="flex flex-col md:hidden gap-10 py-10 items-center">
          <div className="flex flex-row justify-between items-center w-full px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="300"
              height="66"
              viewBox="0 0 400 100"
              className="w-24 h-12 cursor-pointer fill-white bg-gradient-mentor"
            >
              <defs>
                <style>.cls-1{}</style>
              </defs>
              <g id="Layer_7" data-name="Layer 7">
                <path
                  className="cls-1"
                  d="M75.12,2h8.31V43.18H74.61V16L64.8,29.77h-7L47.85,16.42V43.18H39V2H47.4l14,19Z"
                />
                <path
                  className="cls-1"
                  d="M93.73,2h25.7v8H102.55v7.43H117.4v8H102.55v9.69h16.88v8H93.73Z"
                />
                <path
                  className="cls-1"
                  d="M157.93,2h8.83V43.18h-8.42L138.61,16.31V43.18h-8.82V2H138l19.91,27Z"
                />
                <path
                  className="cls-1"
                  d="M175.6,2h29.83v8h-10.5V43.18H186.1V10H175.6Z"
                />
                <path
                  className="cls-1"
                  d="M233.71,1.45a19,19,0,0,1,7.9,1.68,20.49,20.49,0,0,1,6.47,4.59,22.14,22.14,0,0,1,4.35,6.73,21.11,21.11,0,0,1,1.6,8.18,21.46,21.46,0,0,1-1.6,8.19,22.06,22.06,0,0,1-4.35,6.79,21,21,0,0,1-6.47,4.61,19.08,19.08,0,0,1-15.79,0,20.56,20.56,0,0,1-6.44-4.61,22.2,22.2,0,0,1-4.33-6.79,21.45,21.45,0,0,1-1.59-8.19,21.11,21.11,0,0,1,1.59-8.18,22.27,22.27,0,0,1,4.33-6.73,20,20,0,0,1,6.44-4.59A19,19,0,0,1,233.71,1.45Zm0,33.72a10.28,10.28,0,0,0,4.46-1,11.79,11.79,0,0,0,3.65-2.7,12.88,12.88,0,0,0,2.46-4,13.1,13.1,0,0,0,.89-4.88,13.28,13.28,0,0,0-.89-4.9,12.85,12.85,0,0,0-2.46-4A11.79,11.79,0,0,0,238.2,11a10.64,10.64,0,0,0-8.92,0,11.64,11.64,0,0,0-3.64,2.7,12.49,12.49,0,0,0-2.46,4,13.29,13.29,0,0,0-.9,4.9,13.11,13.11,0,0,0,.9,4.88,12.52,12.52,0,0,0,2.46,4,11.64,11.64,0,0,0,3.64,2.7A10.28,10.28,0,0,0,233.74,35.17Z"
                />
                <path
                  className="cls-1"
                  d="M293.1,14.27a12.46,12.46,0,0,1-.55,3.75A12.3,12.3,0,0,1,291,21.27a11.56,11.56,0,0,1-2.38,2.61,12.89,12.89,0,0,1-3,1.83l13.64,17.47H289l-12.71-16.6h-3.94v16.6h-8.82V2h17.76a11.3,11.3,0,0,1,4.61,1,11.63,11.63,0,0,1,3.77,2.61,12.45,12.45,0,0,1,2.53,3.89A12.3,12.3,0,0,1,293.1,14.27Zm-12.94,4.3a3.94,3.94,0,0,0,2.91-1.25,4.2,4.2,0,0,0,1.21-3.05,4.15,4.15,0,0,0-1.21-3A3.93,3.93,0,0,0,280.16,10h-7.83v8.53Z"
                />
                <path
                  className="cls-1"
                  d="M19,55.23a11.11,11.11,0,0,1,4.59,1,11.93,11.93,0,0,1,3.75,2.61,12.44,12.44,0,0,1,3.46,8.68,12.53,12.53,0,0,1-.92,4.79,12.78,12.78,0,0,1-2.53,3.91,11.5,11.5,0,0,1-3.74,2.64,11.11,11.11,0,0,1-4.59,1h-9v16.6H1.24V55.23ZM17.85,71.77a4,4,0,0,0,2.92-1.25,4.13,4.13,0,0,0,1.24-3,4.08,4.08,0,0,0-1.24-3,4,4,0,0,0-2.92-1.25h-7.8v8.53Z"
                />
                <path
                  className="cls-1"
                  d="M47.85,88.37H64.74v8H39V55.23h8.81Z"
                />
                <path
                  className="cls-1"
                  d="M103,55.23l17.18,41.15h-9.52L107,87.56H89.51l-3.66,8.82H76.27L93.46,55.23Zm.64,24.32-5.4-12.94L92.88,79.55Z"
                />
                <path
                  className="cls-1"
                  d="M157.2,55.23H166V96.38h-8.41L137.87,69.51V96.38h-8.81V55.23h8.23L157.2,82.28Z"
                />
              </g>
            </svg>
            <div className="flex flex-row gap-2 text-xs items-center uppercase font-bold font-conduit">
              <FaCopyright></FaCopyright> Copyright
            </div>
          </div>
          <div className="flex flex-col text-center">
            <a
              href="https://www.google.com/maps/place/SOHO/@55.666656,12.5567907,17z/data=!3m1!4b1!4m6!3m5!1s0x46525373da1d5b59:0x8bc8cd4d0c582aa4!8m2!3d55.666653!4d12.559371!16s%2Fg%2F1td9ccch?entry=ttu"
              className="m-1 text-lg"
            >
              Flæsketorvet 68, 1., 1711, København V <br></br>
              <span className="text-yellow-400">SOHO</span>
            </a>
            <a className="m-1 text-lg" href="tel:+4542955969">
              Telefon: <span className="text-yellow-400">+45 42955969</span>
            </a>
            <a href="mailto:jl@mentorplan.dk" className="m-1 text-lg">
              Sikkermail:{" "}
              <span className="text-yellow-400">jl@mentorplan.dk</span>
            </a>
            <p className="m1 text-lg">CVR: 37923850</p>
          </div>
          <div className="flex flex-row justify-between gap-5">
            <ArrowUpIcon
              className="size-12"
              onClick={scrollToTop}
            ></ArrowUpIcon>
            <Link
              className="text-white"
              href="https://www.linkedin.com/in/jimmililjehult/"
            >
              <FaLinkedin className="size-12"></FaLinkedin>
            </Link>
          </div>
        </div>

        {/* Mobile up to md:breakpoint OLD Backup */}
        {/* <div className="flex flex-col md:hidden gap-10 py-10 items-center">
          <div className="flex flex-row justify-between items-center w-full px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="299.87"
              height="76"
              viewBox="0 0 299.87 97.83"
              className="w-28 cursor-pointer w-28 cursor-pointer fill-white bg-gradient-mentor
              xl:w-36"
            >
              <defs>
                <style>.cls-1{}</style>
              </defs>
              <g id="Layer_7" data-name="Layer 7">
                <path
                  className="cls-1"
                  d="M75.12,2h8.31V43.18H74.61V16L64.8,29.77h-7L47.85,16.42V43.18H39V2H47.4l14,19Z"
                />
                <path
                  className="cls-1"
                  d="M93.73,2h25.7v8H102.55v7.43H117.4v8H102.55v9.69h16.88v8H93.73Z"
                />
                <path
                  className="cls-1"
                  d="M157.93,2h8.83V43.18h-8.42L138.61,16.31V43.18h-8.82V2H138l19.91,27Z"
                />
                <path
                  className="cls-1"
                  d="M175.6,2h29.83v8h-10.5V43.18H186.1V10H175.6Z"
                />
                <path
                  className="cls-1"
                  d="M233.71,1.45a19,19,0,0,1,7.9,1.68,20.49,20.49,0,0,1,6.47,4.59,22.14,22.14,0,0,1,4.35,6.73,21.11,21.11,0,0,1,1.6,8.18,21.46,21.46,0,0,1-1.6,8.19,22.06,22.06,0,0,1-4.35,6.79,21,21,0,0,1-6.47,4.61,19.08,19.08,0,0,1-15.79,0,20.56,20.56,0,0,1-6.44-4.61,22.2,22.2,0,0,1-4.33-6.79,21.45,21.45,0,0,1-1.59-8.19,21.11,21.11,0,0,1,1.59-8.18,22.27,22.27,0,0,1,4.33-6.73,20,20,0,0,1,6.44-4.59A19,19,0,0,1,233.71,1.45Zm0,33.72a10.28,10.28,0,0,0,4.46-1,11.79,11.79,0,0,0,3.65-2.7,12.88,12.88,0,0,0,2.46-4,13.1,13.1,0,0,0,.89-4.88,13.28,13.28,0,0,0-.89-4.9,12.85,12.85,0,0,0-2.46-4A11.79,11.79,0,0,0,238.2,11a10.64,10.64,0,0,0-8.92,0,11.64,11.64,0,0,0-3.64,2.7,12.49,12.49,0,0,0-2.46,4,13.29,13.29,0,0,0-.9,4.9,13.11,13.11,0,0,0,.9,4.88,12.52,12.52,0,0,0,2.46,4,11.64,11.64,0,0,0,3.64,2.7A10.28,10.28,0,0,0,233.74,35.17Z"
                />
                <path
                  className="cls-1"
                  d="M293.1,14.27a12.46,12.46,0,0,1-.55,3.75A12.3,12.3,0,0,1,291,21.27a11.56,11.56,0,0,1-2.38,2.61,12.89,12.89,0,0,1-3,1.83l13.64,17.47H289l-12.71-16.6h-3.94v16.6h-8.82V2h17.76a11.3,11.3,0,0,1,4.61,1,11.63,11.63,0,0,1,3.77,2.61,12.45,12.45,0,0,1,2.53,3.89A12.3,12.3,0,0,1,293.1,14.27Zm-12.94,4.3a3.94,3.94,0,0,0,2.91-1.25,4.2,4.2,0,0,0,1.21-3.05,4.15,4.15,0,0,0-1.21-3A3.93,3.93,0,0,0,280.16,10h-7.83v8.53Z"
                />
                <path
                  className="cls-1"
                  d="M19,55.23a11.11,11.11,0,0,1,4.59,1,11.93,11.93,0,0,1,3.75,2.61,12.44,12.44,0,0,1,3.46,8.68,12.53,12.53,0,0,1-.92,4.79,12.78,12.78,0,0,1-2.53,3.91,11.5,11.5,0,0,1-3.74,2.64,11.11,11.11,0,0,1-4.59,1h-9v16.6H1.24V55.23ZM17.85,71.77a4,4,0,0,0,2.92-1.25,4.13,4.13,0,0,0,1.24-3,4.08,4.08,0,0,0-1.24-3,4,4,0,0,0-2.92-1.25h-7.8v8.53Z"
                />
                <path
                  className="cls-1"
                  d="M47.85,88.37H64.74v8H39V55.23h8.81Z"
                />
                <path
                  className="cls-1"
                  d="M103,55.23l17.18,41.15h-9.52L107,87.56H89.51l-3.66,8.82H76.27L93.46,55.23Zm.64,24.32-5.4-12.94L92.88,79.55Z"
                />
                <path
                  className="cls-1"
                  d="M157.2,55.23H166V96.38h-8.41L137.87,69.51V96.38h-8.81V55.23h8.23L157.2,82.28Z"
                />
              </g>
            </svg>
            <div className="flex flex-row gap-2 text-xs items-center uppercase font-bold font-conduit">
              <FaCopyright></FaCopyright> Copyright
            </div>
          </div>
          <div className="flex flex-col gap-5 text-center">
            <div className="">
              <h1 className="m-1 text-4xl uppercase font-bold font-conduit">
                Mød Mig Her
              </h1>
              <p className="m-1 text-2xl">
                Flæsketorvet 68, 1.<br></br>1711 København V<br></br>
                <span className="text-yellow-400">SOHO</span>
              </p>
            </div>
            <div className="">
              <h1 className="m-1 text-4xl uppercase font-bold font-conduit">
                Skriv Til Mig
              </h1>
              <p className="m-1 text-2xl">jl@mentorplan.dk</p>
            </div>
            <div className="">
              <h1 className="m-1 text-4xl uppercase font-bold font-conduit">
                Ring På
              </h1>
              <a className="m-1 text-2xl" href="tel:+4542955969">
                +45 42955969
              </a>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-5">
            <ArrowUpIcon
              className="size-12"
              onClick={scrollToTop}
            ></ArrowUpIcon>
            <Link
              className="text-white"
              href="https://www.linkedin.com/in/jimmililjehult/"
            >
              <FaLinkedin className="size-12"></FaLinkedin>
            </Link>
          </div>
        </div> */}

        {/* Desktop from md:breakpoint */}
        <div className="hidden md:flex flex-row justify-between gap-10 px-32 py-16 h-[calc(50svh)]">
          <div className="flex flex-col justify-between px-5 basis-3/12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="300"
              height="66"
              viewBox="0 0 400 100"
              className="w-24 h-12 cursor-pointer fill-white bg-gradient-mentor"
            >
              <defs>
                <style>.cls-1{}</style>
              </defs>
              <g id="Layer_7" data-name="Layer 7">
                <path
                  className="cls-1"
                  d="M75.12,2h8.31V43.18H74.61V16L64.8,29.77h-7L47.85,16.42V43.18H39V2H47.4l14,19Z"
                />
                <path
                  className="cls-1"
                  d="M93.73,2h25.7v8H102.55v7.43H117.4v8H102.55v9.69h16.88v8H93.73Z"
                />
                <path
                  className="cls-1"
                  d="M157.93,2h8.83V43.18h-8.42L138.61,16.31V43.18h-8.82V2H138l19.91,27Z"
                />
                <path
                  className="cls-1"
                  d="M175.6,2h29.83v8h-10.5V43.18H186.1V10H175.6Z"
                />
                <path
                  className="cls-1"
                  d="M233.71,1.45a19,19,0,0,1,7.9,1.68,20.49,20.49,0,0,1,6.47,4.59,22.14,22.14,0,0,1,4.35,6.73,21.11,21.11,0,0,1,1.6,8.18,21.46,21.46,0,0,1-1.6,8.19,22.06,22.06,0,0,1-4.35,6.79,21,21,0,0,1-6.47,4.61,19.08,19.08,0,0,1-15.79,0,20.56,20.56,0,0,1-6.44-4.61,22.2,22.2,0,0,1-4.33-6.79,21.45,21.45,0,0,1-1.59-8.19,21.11,21.11,0,0,1,1.59-8.18,22.27,22.27,0,0,1,4.33-6.73,20,20,0,0,1,6.44-4.59A19,19,0,0,1,233.71,1.45Zm0,33.72a10.28,10.28,0,0,0,4.46-1,11.79,11.79,0,0,0,3.65-2.7,12.88,12.88,0,0,0,2.46-4,13.1,13.1,0,0,0,.89-4.88,13.28,13.28,0,0,0-.89-4.9,12.85,12.85,0,0,0-2.46-4A11.79,11.79,0,0,0,238.2,11a10.64,10.64,0,0,0-8.92,0,11.64,11.64,0,0,0-3.64,2.7,12.49,12.49,0,0,0-2.46,4,13.29,13.29,0,0,0-.9,4.9,13.11,13.11,0,0,0,.9,4.88,12.52,12.52,0,0,0,2.46,4,11.64,11.64,0,0,0,3.64,2.7A10.28,10.28,0,0,0,233.74,35.17Z"
                />
                <path
                  className="cls-1"
                  d="M293.1,14.27a12.46,12.46,0,0,1-.55,3.75A12.3,12.3,0,0,1,291,21.27a11.56,11.56,0,0,1-2.38,2.61,12.89,12.89,0,0,1-3,1.83l13.64,17.47H289l-12.71-16.6h-3.94v16.6h-8.82V2h17.76a11.3,11.3,0,0,1,4.61,1,11.63,11.63,0,0,1,3.77,2.61,12.45,12.45,0,0,1,2.53,3.89A12.3,12.3,0,0,1,293.1,14.27Zm-12.94,4.3a3.94,3.94,0,0,0,2.91-1.25,4.2,4.2,0,0,0,1.21-3.05,4.15,4.15,0,0,0-1.21-3A3.93,3.93,0,0,0,280.16,10h-7.83v8.53Z"
                />
                <path
                  className="cls-1"
                  d="M19,55.23a11.11,11.11,0,0,1,4.59,1,11.93,11.93,0,0,1,3.75,2.61,12.44,12.44,0,0,1,3.46,8.68,12.53,12.53,0,0,1-.92,4.79,12.78,12.78,0,0,1-2.53,3.91,11.5,11.5,0,0,1-3.74,2.64,11.11,11.11,0,0,1-4.59,1h-9v16.6H1.24V55.23ZM17.85,71.77a4,4,0,0,0,2.92-1.25,4.13,4.13,0,0,0,1.24-3,4.08,4.08,0,0,0-1.24-3,4,4,0,0,0-2.92-1.25h-7.8v8.53Z"
                />
                <path
                  className="cls-1"
                  d="M47.85,88.37H64.74v8H39V55.23h8.81Z"
                />
                <path
                  className="cls-1"
                  d="M103,55.23l17.18,41.15h-9.52L107,87.56H89.51l-3.66,8.82H76.27L93.46,55.23Zm.64,24.32-5.4-12.94L92.88,79.55Z"
                />
                <path
                  className="cls-1"
                  d="M157.2,55.23H166V96.38h-8.41L137.87,69.51V96.38h-8.81V55.23h8.23L157.2,82.28Z"
                />
              </g>
            </svg>
            <div className="flex flex-row gap-2 text-xs items-center uppercase font-bold font-conduit">
              <FaCopyright></FaCopyright> Copyright
            </div>
          </div>
          <div className="flex flex-col justify-center text-center basis-6/12">
            {/* <h1 className="m-1 text-2xl uppercase font-bold font-conduit">
                Mød Mig Her
              </h1> */}
            <a
              href="https://www.google.com/maps/place/SOHO/@55.666656,12.5567907,17z/data=!3m1!4b1!4m6!3m5!1s0x46525373da1d5b59:0x8bc8cd4d0c582aa4!8m2!3d55.666653!4d12.559371!16s%2Fg%2F1td9ccch?entry=ttu"
              className="m-1 text-xl"
            >
              Flæsketorvet 68, 1. sal, 1711, København V <br></br>
              <span className="text-yellow-400 dark:text-yellow-500 font-conduitbold">
                SOHO
              </span>
            </a>
            {/* <h1 className="m-1 text-2xl uppercase font-bold font-conduit">
                Skriv Til Mig
              </h1> */}
            <p className="m-1 text-xl">
              Telefon: <a href="tel:+4542955969">+45 42955969</a> | Sikkermail:{" "}
              <span className="text-yellow-400 dark:text-yellow-500">
                jl@mentorplan.dk
              </span>
            </p>
            <p className="m1 text-lg text-slate-500">CVR: 37923850</p>
            {/* <div className="">
              <h1 className="m-1 text-2xl uppercase font-bold font-conduit">
                Ring På
              </h1>
              <a className="m-1 text-xl" href="tel:+4542955969">
                +45 42955969
              </a>
            </div> */}
          </div>
          <div className="flex flex-col justify-between items-end gap-5 basis-3/12">
            <ArrowUpIcon
              className="size-12 hover:cursor-pointer "
              onClick={scrollToTop}
            ></ArrowUpIcon>
            <Link
              className="text-white"
              href="https://www.linkedin.com/in/jimmililjehult/"
            >
              <FaLinkedin className="size-12"></FaLinkedin>
            </Link>
          </div>
        </div>

        {/* Desktop from md:breakpoint OLD BACKUP */}
        {/* <div className="hidden md:flex flex-row justify-between gap-10 p-32">
          <div className="flex flex-col justify-between px-5 basis-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="299.87"
              height="76"
              viewBox="0 0 299.87 97.83"
              className="w-28 cursor-pointer fill-white bg-gradient-mentor
              xl:w-36"
            >
              <defs>
                <style>.cls-1{}</style>
              </defs>
              <g id="Layer_7" data-name="Layer 7">
                <path
                  className="cls-1"
                  d="M75.12,2h8.31V43.18H74.61V16L64.8,29.77h-7L47.85,16.42V43.18H39V2H47.4l14,19Z"
                />
                <path
                  className="cls-1"
                  d="M93.73,2h25.7v8H102.55v7.43H117.4v8H102.55v9.69h16.88v8H93.73Z"
                />
                <path
                  className="cls-1"
                  d="M157.93,2h8.83V43.18h-8.42L138.61,16.31V43.18h-8.82V2H138l19.91,27Z"
                />
                <path
                  className="cls-1"
                  d="M175.6,2h29.83v8h-10.5V43.18H186.1V10H175.6Z"
                />
                <path
                  className="cls-1"
                  d="M233.71,1.45a19,19,0,0,1,7.9,1.68,20.49,20.49,0,0,1,6.47,4.59,22.14,22.14,0,0,1,4.35,6.73,21.11,21.11,0,0,1,1.6,8.18,21.46,21.46,0,0,1-1.6,8.19,22.06,22.06,0,0,1-4.35,6.79,21,21,0,0,1-6.47,4.61,19.08,19.08,0,0,1-15.79,0,20.56,20.56,0,0,1-6.44-4.61,22.2,22.2,0,0,1-4.33-6.79,21.45,21.45,0,0,1-1.59-8.19,21.11,21.11,0,0,1,1.59-8.18,22.27,22.27,0,0,1,4.33-6.73,20,20,0,0,1,6.44-4.59A19,19,0,0,1,233.71,1.45Zm0,33.72a10.28,10.28,0,0,0,4.46-1,11.79,11.79,0,0,0,3.65-2.7,12.88,12.88,0,0,0,2.46-4,13.1,13.1,0,0,0,.89-4.88,13.28,13.28,0,0,0-.89-4.9,12.85,12.85,0,0,0-2.46-4A11.79,11.79,0,0,0,238.2,11a10.64,10.64,0,0,0-8.92,0,11.64,11.64,0,0,0-3.64,2.7,12.49,12.49,0,0,0-2.46,4,13.29,13.29,0,0,0-.9,4.9,13.11,13.11,0,0,0,.9,4.88,12.52,12.52,0,0,0,2.46,4,11.64,11.64,0,0,0,3.64,2.7A10.28,10.28,0,0,0,233.74,35.17Z"
                />
                <path
                  className="cls-1"
                  d="M293.1,14.27a12.46,12.46,0,0,1-.55,3.75A12.3,12.3,0,0,1,291,21.27a11.56,11.56,0,0,1-2.38,2.61,12.89,12.89,0,0,1-3,1.83l13.64,17.47H289l-12.71-16.6h-3.94v16.6h-8.82V2h17.76a11.3,11.3,0,0,1,4.61,1,11.63,11.63,0,0,1,3.77,2.61,12.45,12.45,0,0,1,2.53,3.89A12.3,12.3,0,0,1,293.1,14.27Zm-12.94,4.3a3.94,3.94,0,0,0,2.91-1.25,4.2,4.2,0,0,0,1.21-3.05,4.15,4.15,0,0,0-1.21-3A3.93,3.93,0,0,0,280.16,10h-7.83v8.53Z"
                />
                <path
                  className="cls-1"
                  d="M19,55.23a11.11,11.11,0,0,1,4.59,1,11.93,11.93,0,0,1,3.75,2.61,12.44,12.44,0,0,1,3.46,8.68,12.53,12.53,0,0,1-.92,4.79,12.78,12.78,0,0,1-2.53,3.91,11.5,11.5,0,0,1-3.74,2.64,11.11,11.11,0,0,1-4.59,1h-9v16.6H1.24V55.23ZM17.85,71.77a4,4,0,0,0,2.92-1.25,4.13,4.13,0,0,0,1.24-3,4.08,4.08,0,0,0-1.24-3,4,4,0,0,0-2.92-1.25h-7.8v8.53Z"
                />
                <path
                  className="cls-1"
                  d="M47.85,88.37H64.74v8H39V55.23h8.81Z"
                />
                <path
                  className="cls-1"
                  d="M103,55.23l17.18,41.15h-9.52L107,87.56H89.51l-3.66,8.82H76.27L93.46,55.23Zm.64,24.32-5.4-12.94L92.88,79.55Z"
                />
                <path
                  className="cls-1"
                  d="M157.2,55.23H166V96.38h-8.41L137.87,69.51V96.38h-8.81V55.23h8.23L157.2,82.28Z"
                />
              </g>
            </svg>
            <div className="flex flex-row gap-2 text-xs items-center uppercase font-bold font-conduit">
              <FaCopyright></FaCopyright> Copyright
            </div>
          </div>
          <div className="flex flex-col gap-5 text-center basis-1/3">
            <div className="">
              <h1 className="m-1 text-2xl uppercase font-bold font-conduit">
                Mød Mig Her
              </h1>
              <p className="m-1 text-xl">
                Flæsketorvet 68, 1.<br></br>1711 København V<br></br>
                <span className="text-yellow-400 dark:text-yellow-500 font-conduitbold">
                  SOHO
                </span>
              </p>
            </div>
            <div className="">
              <h1 className="m-1 text-2xl uppercase font-bold font-conduit">
                Skriv Til Mig
              </h1>
              <p className="m-1 text-xl">jl@mentorplan.dk</p>
            </div>
            <div className="">
              <h1 className="m-1 text-2xl uppercase font-bold font-conduit">
                Ring På
              </h1>
              <a className="m-1 text-xl" href="tel:+4542955969">
                +45 42955969
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between items-end gap-5 basis-1/3">
            <ArrowUpIcon
              className="size-12 hover:cursor-pointer "
              onClick={scrollToTop}
            ></ArrowUpIcon>
            <Link
              className="text-white"
              href="https://www.linkedin.com/in/jimmililjehult/"
            >
              <FaLinkedin className="size-12"></FaLinkedin>
            </Link>
          </div>
        </div> */}
      </footer>
    </>
  );
};

export default Footer;
