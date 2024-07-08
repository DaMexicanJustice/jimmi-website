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
    }, 3000);
  }, []);
  return (
    <>
      <Navbar useScrollBehavior={false} />
      <section
        id="Social-feed"
        className="min-h-[calc(100svh-3rem)] max-h-max bg-slate-100 dark:bg-neutral-900 p-5
        xl:px-32"
      >
        <main className="flex flex-col h-full gap-8 py-8 mt-12 items-center">
          <h1 className="uppercase font-conduitbold text-2xl text-slate-900 dark:text-slate-50">
            Den Gode Historie
          </h1>
          {loading ? <Spinner /> : <LinkedIn />}
        </main>
      </section>
      <Footer />
    </>
  );
}
