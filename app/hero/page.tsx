import "/app/styles/styles.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import UiButton from "../ui/ui-button";

export default function Hero() {
  return (
    <>
      <section
        id="Hero"
        className="px-5 h-svh
      md:px-32"
      >
        <main
          className="relative flex flex-col items-center justify-center h-full gap-5 z-40 relative font-conduit
        md:px-32 md:gap-10"
        >
          <h1
            className="text-xl whitespace-pre font-bold uppercase text-white
          md:text-5xl"
          >
            Sammen med borger finder vi &nbsp;
            <span className="z-40 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-400 dark:bg-yellow-500 relative inline-block">
              <span className="relative">vejen</span>
            </span>
          </h1>
          <h2
            className="text-lg font-semibold text-white
          md:text-2xl"
          >
            Alt godt samarbejde starter med en god kop kaffe
          </h2>
          <h2
            className="text-lg font-semibold text-white
          md:text-xl"
          >
            Erfarne mentorer &nbsp; i &nbsp; trygge rammer
          </h2>
        </main>
        <div
          className="top-0 left-0 absolute h-svh w-full object-cover z-30
        bg-black/40"
        ></div>
        <video
          autoPlay
          loop
          muted
          id="video"
          src="/video/mentorplan.mp4"
          typeof="video/mp4"
          className="top-0 left-0 absolute h-svh w-full object-cover"
        ></video>
      </section>
    </>
  );
}
