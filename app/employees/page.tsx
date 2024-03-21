import Footer from "../ui/footer";
import Navbar from "../ui/navbar";

export default function Employees() {
  return (
    <>
      <Navbar></Navbar>
      <section
        id="Employees"
        className="px-5 h-[calc(100svh-6rem)] mt-24 bg-slate-600
        md:px-40"
      >
        <main className="flex h-full flex-col items-center justify-center">
          <h1 className="text-5xl text-white uppercase font-bold">Employees</h1>
        </main>
      </section>
      <Footer></Footer>
    </>
  );
}
