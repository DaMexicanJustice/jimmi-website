import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function History() {
  return (
    <>
      <section
        id="History"
        className="px-5 min-h-[calc(100svh-6rem)] bg-slate-200 overflow-hidden
        md:px-20"
      >
        <main
          className="flex flex-col items-center justify-evenly h-full gap-6 py-6
        md:gap-10 md:flex-row md:items-start
        xl:gap-40"
        >
          <div
            className="hidden 
          md:order-1
          xl:block xl:basis-2/12"
          ></div>
          <Image
            src="/images/jimmi.jpg"
            width={180}
            height={220}
            alt="Jimmi billed"
            className="w-full drop-shadow-md
            md:order-3 md:basis-5/12
            xl:basis-3/12 "
          />

          <div
            className="hidden
          md:order-4 md:basis-7/12
          xl:block xl:basis-2/12"
          ></div>
          <div
            className="flex flex-col md:basis-7/12 gap-10 items-center
          md:items-start md:justify-evenly md:order-2"
          >
            <h1
              className="uppercase text-black text-3xl font-bold font-conduit
          md:text-5xl"
            >
              Historik
            </h1>
            <p className="text-black text-xl text-justify leading-10">
              Sunt amet ad cupidatat in excepteur anim ex. Lorem aliqua deserunt
              minim sint quis enim laborum esse adipisicing culpa. Occaecat ut
              duis eiusmod occaecat esse deserunt et fugiat magna irure
              voluptate non sunt. <br></br>
              <br></br>Anim qui incididunt sint do. Eu sunt eu incididunt amet.
              Occaecat laboris aliquip elit enim deserunt officia nulla nisi sit
              officia consequat. Ut nulla cupidatat ex qui sunt commodo
              reprehenderit velit esse ullamco consectetur irure adipisicing
              fugiat. <br></br>
              <br></br>Ex qui reprehenderit sint anim occaecat magna. Labore eu
              cupidatat voluptate ea nisi nostrud duis duis. Sit ad enim
              deserunt aliquip dolore eiusmod dolor laboris ea mollit id.
              Officia dolore adipisicing minim velit reprehenderit velit ex
              mollit qui. Aliqua pariatur fugiat aute mollit pariatur non ea
              eiusmod sit sint laboris dolor aliqua. <br></br>
              <br></br> Adipisicing deserunt Lorem dolore nostrud.
            </p>
            <Link href="https://www.linkedin.com/in/jimmililjehult/">
              <FaLinkedin className="size-16 text-blue-700"></FaLinkedin>
            </Link>
          </div>
        </main>
      </section>
    </>
  );
}
