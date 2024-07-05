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
      <section id="Social-feed" className="min-h-[calc(100svh-3rem)] max-h-max">
        <main className="flex flex-col h-full gap-8 py-8 mt-12 items-center">
          <h1 className="uppercase font-conduitbold text-2xl">
            Den Gode Historie
          </h1>
          {loading ? <Spinner /> : <LinkedIn />}
        </main>
      </section>
      <Footer />
    </>
  );
}
