import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function History() {
  return (
    <>
      <section
        id="History"
        className="px-5 lg:px-20 min-h-[calc(100svh-4rem)] bg-slate-200"
      >
        <main className="flex h-full flex-col items-center justify-center gap-5 py-5">
          <Image
            src="/images/180x220.png"
            width={180}
            height={220}
            alt="Jimmi billed"
          />
          <h1 className="uppercase text-black font-lg font-bold ">Historik</h1>
          <p className="text-black font-xs">
            Sunt amet ad cupidatat in excepteur anim ex. Lorem aliqua deserunt
            minim sint quis enim laborum esse adipisicing culpa. Occaecat ut
            duis eiusmod occaecat esse deserunt et fugiat magna irure voluptate
            non sunt. Anim qui incididunt sint do. Eu sunt eu incididunt amet.
            Occaecat laboris aliquip elit enim deserunt officia nulla nisi sit
            officia consequat. Ut nulla cupidatat ex qui sunt commodo
            reprehenderit velit esse ullamco consectetur irure adipisicing
            fugiat. Ex qui reprehenderit sint anim occaecat magna. Labore eu
            cupidatat voluptate ea nisi nostrud duis duis. Sit ad enim deserunt
            aliquip dolore eiusmod dolor laboris ea mollit id. Officia dolore
            adipisicing minim velit reprehenderit velit ex mollit qui. Aliqua
            pariatur fugiat aute mollit pariatur non ea eiusmod sit sint laboris
            dolor aliqua. Adipisicing deserunt Lorem dolore nostrud.
          </p>
          <Link href="https://www.linkedin.com/in/jimmililjehult/">
            <FaLinkedin className="size-10   text-black  "></FaLinkedin>
          </Link>
        </main>
      </section>
    </>
  );
}
