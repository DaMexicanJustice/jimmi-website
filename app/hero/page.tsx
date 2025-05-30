import Typewriter from "../ui/typewriter";
import "/app/styles/styles.css";

export default function Hero() {
  return (
    <>
      <section id="Hero" className="h-svh">
        <main
          className="relative flex flex-col items-center justify-center h-full gap-5 z-40 relative font-conduit
          cursor-default lg:gap-10"
        >
          <h1
            className="text-xl whitespace-pre font-bold uppercase text-slate-50
          lg:text-5xl"
          >
            Sammen med borger finder vi &nbsp;
            <span className="z-40 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-400 dark:bg-yellow-500 relative inline-block">
              <span className="relative">vejen</span>
            </span>
          </h1>
          <Typewriter></Typewriter>
        </main>
        <div
          className="top-0 left-0 absolute h-svh w-full object-cover z-30
        bg-black/40"
        ></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          id="video"
          src="/video/mentorplan.mp4"
          typeof="video/mp4"
          className="top-0 left-0 absolute h-svh w-full object-cover"
        ></video>
      </section>
    </>
  );
}
