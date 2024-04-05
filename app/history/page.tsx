import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function History() {
  return (
    <>
      <section
        id="History"
        className="px-5 min-h-[calc(100svh-6rem)] bg-slate-200 dark:bg-slate-800 overflow-hidden
        md:px-20 md:py-40
        xl:py-0"
      >
        <main
          className="flex flex-col items-center justify-evenly gap-6 py-6
        xl:gap-10 xl:flex-row xl:justify-between xl:items-center
        xl:gap-1"
        >
          <Image
            src="/images/jimmi.jpg"
            width={180}
            height={220}
            alt="Jimmi billed"
            className="drop-shadow-md
            xl:order-3 xl:w-full
            xl:basis-3/12 "
          />

          <div
            className="flex flex-col gap-10 items-center
          xl:items-start xl:justify-evenly
          xl:order-2 xl:basis-7/12"
          >
            <h1
              className="uppercase text-slate-900 dark:text-slate-100 text-3xl font-bold font-conduit
          xl:text-5xl"
            >
              Historik
            </h1>
            <p className="text-slate-900 dark:text-slate-100 text-base text-justify leading-10">
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
              <FaLinkedin className="size-16 fill-blue-700 dark:fill-slate-100"></FaLinkedin>
            </Link>
          </div>
        </main>
      </section>
    </>
  );
}
