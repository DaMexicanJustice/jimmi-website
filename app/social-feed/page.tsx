"use client"; // This is a client component
import { useEffect, useState } from "react";
import Footer from "../ui/footer";
import LinkedIn from "../ui/linkedin";
import Navbar from "../ui/navbar";
import Spinner from "../ui/spinner";

export default function Services() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Navbar useScrollBehavior={false} />
      <section
        id="Social-feed"
        className="px-5 min-h-[calc(100svh-6rem)] bg-slate-100 dark:bg-slate-900
        md:px-32"
      >
        <main className="flex flex-col h-full gap-8 py-8 mt-24 items-center">
          <h1 className="uppercase font-bold font-conduit text-2xl">
            Den Gode Historie
          </h1>
          {loading ? <Spinner /> : <LinkedIn />}
        </main>
      </section>
      <Footer />
    </>
  );
}