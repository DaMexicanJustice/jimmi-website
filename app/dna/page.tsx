import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function Dna() {
  const divElements = [];

  for (let i = 0; i < 5; i++) {
    divElements.push(
      <div key={i}>
        <div className="flex flex-row gap-1 items-center">
          <CheckCircleIcon className="size-6 text-green-900"></CheckCircleIcon>
          <p className="text-black text-sm">
            Quis fugiat dolore aliqua officia.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section
        id="DNA"
        className="px-5 lg:px-20 min-h-[calc(100svh-4rem)] bg-slate-400"
      >
        <main className="flex h-full flex-col items-center justify-center">
          {/* Left Panel / Top Panel */}
          <div className="flex flex-col gap-5 py-5 items-center">
            <h1 className="text-black text-xl font-bold ">Mollit ea</h1>
            <div className="flex flex-col gap-2">
              <h2 className="text-black text-lg font-bold">
                Exercitation eu sint aliqua
              </h2>
              {divElements}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-xs">
                Laboris minim nulla eu dolor et magna veniam exercitation
                exercitation minim. Ad deserunt aliqua est quis dolor
                consectetur nulla aute.
              </p>
              <a className="bg-green-700 text-white text-lg p-2">
                Veniam aliqua aliqua quis
              </a>
            </div>
          </div>

          {/* Right panel / Bottom Panel */}
          <div className="flex flex-col gap-2 bg-slate-100 p-5 border-4 border-t-blue-500">
            <h1 className="text-lg text-blue-500 font-bold">
              Ring: +4542955969
            </h1>
            <h2 className="text-base text-black font-semibold">
              Anim et duis ad eu ut.
            </h2>
            <p className="text-slate-700 text-xs">
              Ad eiusmod nisi qui ullamco aliquip pariatur non velit ex irure
              occaecat.
            </p>
            <form>
              <input
                className="p-2 text-sm normal-case border-4 border-blue-500"
                type="text"
                placeholder="Dit fulde navn *"
              ></input>
              <input
                className="p-2 text-sm normal-case border-4 border-blue-500"
                type="text"
                placeholder="Firmanavn *"
              ></input>
              <input
                className="p-2 text-sm normal-case border-4 border-blue-500"
                type="email"
                placeholder="Din e-mail*"
              ></input>
              <input
                className="p-2 text-sm normal-case border-4 border-blue-500"
                type="tel"
                placeholder="Telefonnummer *"
              ></input>
              <input
                className="p-2 text-sm normal-case border-4 border-blue-500"
                type="text"
                placeholder="Dit fulde navn *"
              ></input>
            </form>
          </div>
        </main>
      </section>
    </>
  );
}
