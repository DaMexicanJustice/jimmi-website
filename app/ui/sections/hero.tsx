export default function Hero() {
  return (
    <section id="Hero" className="relative h-svh">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/mentorplan.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-5 font-conduit cursor-default lg:gap-10">
        <h1 className="text-xl whitespace-pre font-bold uppercase text-slate-50 lg:text-5xl">
          Sammen med borger finder vi&nbsp;
          <span className="relative inline-block before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-400">
            <span className="relative">vejen</span>
          </span>
        </h1>
        <p className="text-base font-semibold text-slate-50 lg:text-2xl">
          Alt godt samarbejde starter med en god kop kaffe
        </p>
      </div>
    </section>
  );
}
