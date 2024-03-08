import Footer from "../ui/footer";
import Navbar from "../ui/navbar";

export default function Employees() {
  return (
    <>
      <Navbar></Navbar>
      <section
        id="Employees"
        className="px-5 lg:px-20 h-[calc(100svh-4rem)] mt-16 bg-slate-600"
      >
        <main className="flex h-full flex-col items-center justify-center">
          <h1 className="text-2xl">Employees</h1>
        </main>
      </section>
      <Footer></Footer>
    </>
  );
}
