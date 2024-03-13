import "/app/styles/styles.css";

export default function Hero() {
  return (
    <>
      <section id="Hero" className="px-5 lg:px-20 h-[calc(100svh-6rem)] mt-24">
        <main className="flex flex-col items-center justify-center h-full gap-5 lg:px-20 z-40 relative">
          <div className="flex flex-row items-center gap-3">
            <hr className="lg:w-28 w-24"></hr>
            <h3 className="text-3xl font-bold text-white">Mentorplan</h3>
            <hr className="lg:w-28 w-24"></hr>
          </div>
          <h1 className="text-5xl whitespace-pre font-bold uppercase text-white">
            Dit fulde &nbsp;
            <span className="z-40 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block">
              <span className="relative">potentiale</span>
            </span>
          </h1>
          <h2 className="text-2xl font-semibold text-white">
            Gennem personlig mentoring
          </h2>
          <h2 className="text-2xl font-semibold text-white">
            Erfarne mentorer &nbsp; | &nbsp; trygge rammer
          </h2>
        </main>
        <div
          className="top-0 left-0 absolute h-[calc(100svh-6rem)] w-full mt-24 object-cover z-30
        bg-black/40 "
        ></div>
        <video
          autoPlay
          loop
          muted
          id="video"
          src="/video/mentorplan.mp4"
          typeof="video/mp4"
          className="top-0 left-0 absolute h-[calc(100svh-6rem)] w-full mt-24 object-cover"
        ></video>
      </section>
    </>
  );
}
