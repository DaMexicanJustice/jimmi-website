import Image from "next/image";

export default function Services() {
  return (
    <>
      <section
        id="Services"
        className="px-5 min-h-[calc(100svh-6rem)] bg-orange-50
        md:px-20"
      >
        <main
          className="flex flex-col h-full gap-8 md:gap-5 py-8
        md:flex-row md:flex-wrap md:justify-center"
        >
          <div
            className="flex flex-col gap-5 items-center pb-5 pb-5 bg-amber-200 shadow-xl shadow-amber-500/50
          md:basis-2/5 md:grow"
          >
            <Image
              src="/images/390x260.png"
              width={400}
              height={240}
              alt="Ydelse 1"
              className="w-full"
            />
            <h1 className="text-amber-700 font-bold text-4xl font-conduit">
              Ydelse 1
            </h1>
            <p className="text-black text-center text-3xl">
              Consequat incididunt occaecat labore eiusmod tempor. Velit culpa
              laborum proident laboris nisi quis nisi exercitation.
            </p>
            <a className="bg-amber-600 uppercase font-bold text-lg p-5 my-3 w-2/4 text-center text-black">
              Læs Mere
            </a>
          </div>

          <div
            className="flex flex-col gap-5 items-center pb-5 bg-blue-200 shadow-xl shadow-blue-500/50
          md:basis-2/5 md:grow"
          >
            <Image
              src="/images/390x260.png"
              width={400}
              height={240}
              alt="Ydelse 1"
              className="w-full"
            />
            <h1 className="text-blue-700 font-bold text-3xl font-conduit">
              Ydelse 2
            </h1>
            <p className="text-black text-center">
              Sint cupidatat deserunt eiusmod duis minim eu sit adipisicing ad
              velit.
            </p>
            <a className="bg-blue-600 uppercase font-bold text-xl p-5 my-3 w-2/4 text-center text-white">
              Læs Mere
            </a>
          </div>

          <div
            className="flex flex-col gap-5 items-center pb-5 bg-yellow-200 shadow-xl shadow-yellow-500/50
          md:basis-2/5 md:grow"
          >
            <Image
              src="/images/390x260.png"
              width={400}
              height={240}
              alt="Ydelse 1"
              className="w-full"
            />
            <h1 className="text-yellow-700 font-bold text-3xl font-conduit">
              Ydelse 3{" "}
            </h1>
            <p className="text-black text-center">
              Do cillum in dolore est. Deserunt culpa officia eiusmod commodo
              velit.
            </p>
            <a className="bg-yellow-600 uppercase font-bold text-xl p-5 my-3 w-2/4 text-center text-black">
              Læs Mere
            </a>
          </div>

          <div
            className="flex flex-col gap-5 items-center pb-5 bg-indigo-200 shadow-xl shadow-indigo-500/50
          md:basis-2/5 md:grow "
          >
            <Image
              src="/images/390x260.png"
              width={400}
              height={240}
              alt="Ydelse 1"
              className="w-full"
            />
            <h1 className="text-indigo-700 font-bold text-3xl font-conduit">
              Ydelse 4
            </h1>
            <p className="text-black text-center">
              Aliquip sunt amet dolor magna irure pariatur sit pariatur.
            </p>
            <a className="bg-indigo-600 uppercase font-bold text-xl p-5 my-3 w-2/4 text-center text-white">
              Læs Mere
            </a>
          </div>

          <div
            className="flex flex-col gap-5 items-center pb-5 bg-orange-200 shadow-xl shadow-orange-500/50
          md:basis-6/12"
          >
            <Image
              src="/images/390x260.png"
              width={400}
              height={240}
              alt="Ydelse 1"
              className="w-full"
            />
            <h1 className="text-orange-700 font-bold text-3xl font-conduit">
              Ydelse 5
            </h1>
            <p className="text-black text-center">
              Magna adipisicing minim nostrud enim non. Sunt qui culpa proident
              id eiusmod Lorem fugiat non exercitation esse fugiat commodo in
              magna.
            </p>
            <a className="bg-orange-600 uppercase font-bold text-xl p-5 my-3 w-2/4 text-center text-white">
              Læs Mere
            </a>
          </div>
        </main>
      </section>
    </>
  );
}
