import Image from "next/image";

export default function Services() {
  return (
    <>
      <section
        id="Services"
        className="px-5 lg:px-20 min-h-[calc(100svh-4rem)] bg-slate-50"
      >
        <main className="flex h-full flex-col gap-5 py-5">
          <div className="flex flex-col gap-2 items-center bg-green-200">
            <Image
              src="/images/390x260.png"
              width={400}
              height={240}
              alt="Ydelse 1"
            />
            <h1 className="text-green-700 font-bold">Ydelse 1</h1>
            <p className="text-black text-center">
              Consequat incididunt occaecat labore eiusmod tempor.
            </p>
            <a className="bg-green-700 uppercase font-bold text-xs p-3 my-3 w-2/4 text-center">
              Læs Mere
            </a>
          </div>

          <div className="flex flex-col gap-2 items-center bg-blue-200">
            <Image
              src="/images/390x260.png"
              width={400}
              height={240}
              alt="Ydelse 1"
            />
            <h1 className="text-blue-700 font-bold">Ydelse 2</h1>
            <p className="text-black text-center">
              Sint cupidatat deserunt eiusmod duis minim eu sit adipisicing ad
              velit.
            </p>
            <a className="bg-blue-700 uppercase font-bold text-xs p-3 my-3 w-2/4 text-center">
              Læs Mere
            </a>
          </div>

          <div className="flex flex-col gap-2 items-center bg-orange-200">
            <Image
              src="/images/390x260.png"
              width={400}
              height={240}
              alt="Ydelse 1"
            />
            <h1 className="text-orange-700 font-bold">Ydelse 3 </h1>
            <p className="text-black text-center">Do cillum in dolore est.</p>
            <a className="bg-orange-700 uppercase font-bold text-xs p-3 my-3 w-2/4 text-center">
              Læs Mere
            </a>
          </div>

          <div className="flex flex-col gap-2 items-center bg-purple-200">
            <Image
              src="/images/390x260.png"
              width={400}
              height={240}
              alt="Ydelse 1"
            />
            <h1 className="text-purple-700 font-bold">Ydelse 4</h1>
            <p className="text-black text-center">
              Aliquip sunt amet dolor magna irure pariatur sit pariatur.
            </p>
            <a className="bg-purple-700 uppercase font-bold text-xs p-3 my-3 w-2/4 text-center">
              Læs Mere
            </a>
          </div>

          <div className="flex flex-col gap-2 items-center bg-pink-200">
            <Image
              src="/images/390x260.png"
              width={400}
              height={240}
              alt="Ydelse 1"
            />
            <h1 className="text-pink-700 font-bold">Ydelse 4</h1>
            <p className="text-black text-center">
              Magna adipisicing minim nostrud enim non.
            </p>
            <a className="bg-pink-700 uppercase font-bold text-xs p-3 my-3 w-2/4 text-center">
              Læs Mere
            </a>
          </div>
        </main>
      </section>
    </>
  );
}
