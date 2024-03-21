import "/app/styles/styles.css";

export default function Hero() {
  return (
    <>
      <section
        id="Hero"
        className="px-5 h-[calc(100svh-6rem)] mt-24
      md:px-20 md:h-[calc(100svh-11rem)] md:mt-44"
      >
        <main
          className="flex flex-col items-center justify-center h-full gap-5 z-40 relative font-conduit
        md:px-20 md:gap-10"
        >
          <div className="flex flex-row items-center gap-3">
            <hr
              className="w-20
            md:w-32"
            ></hr>
            <h3
              className="text-3xl font-bold text-white
            md:text-4xl"
            >
              Mentorplan
            </h3>
            <hr
              className="w-20
            md:w-32"
            ></hr>
          </div>
          <h1
            className="text-3xl whitespace-pre font-bold uppercase text-white
          md:text-6xl"
          >
            Dit fulde &nbsp;
            <span className="z-40 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block">
              <span className="relative">potentiale</span>
            </span>
          </h1>
          <h2
            className="text-xl font-semibold text-white
          md:text-3xl"
          >
            Gennem personlig mentoring
          </h2>
          <h2
            className="text-xl font-semibold text-white
          md:text-3xl"
          >
            Erfarne mentorer &nbsp; <span className="font-yantramanav">|</span>
            &nbsp; trygge rammer
          </h2>
        </main>
        <div
          className="top-0 left-0 absolute h-[calc(100svh-6rem)] w-full mt-24 object-cover z-30
        bg-black/40
        md:h-[calc(100svh-11rem)] md:mt-44"
        ></div>
        <video
          autoPlay
          loop
          muted
          id="video"
          src="/video/mentorplan.mp4"
          typeof="video/mp4"
          className="top-0 left-0 absolute h-[calc(100svh-6rem)] w-full mt-24 object-cover
          md:h-[calc(100svh-11rem)] md:mt-44"
        ></video>
      </section>
    </>
  );
}
