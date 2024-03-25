"use client"; // This is a client component
import { useSearchParams } from "next/navigation";
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";

export default function EmployeeDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <>
      <Navbar></Navbar>
      <section
        id="Employee-details"
        className="px-5 h-[calc(100svh-6rem)] mt-24 bg-slate-300
      md:px-40"
      >
        <main
          className="flex flex-col items-center justify-center h-full gap-5 z-40 relative font-conduit
        md:px-40 md:gap-10"
        >
          <h1 className="uppercase font-bold text-xl text-slate-900">
            Medarbejder detaljer for ID:{" "}
            <span className="text-orange-500">{id}</span>
          </h1>
        </main>
      </section>
      <Footer></Footer>
    </>
  );
}
