import Footer from "../ui/footer";
import Navbar from "../ui/navbar";

export default function ServiceSocial() {
  return (
    <>
      <Navbar useScrollBehavior={false}></Navbar>
      <section
        id="service-employment"
        className="px-5 h-[calc(100svh-3rem)] mt-12 bg-slate-50 dark:bg-stone-900
        md:px-32"
      >
        <main className="h-full flex flex-row justify-center items-center">
          <h1 className="uppercase font-conduitbold text-xl text-slate-950 dark:text-slate-50">
            Socialindsatser
          </h1>
        </main>
      </section>
      <Footer></Footer>
    </>
  );
}
