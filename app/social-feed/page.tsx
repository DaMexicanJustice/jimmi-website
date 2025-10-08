"use client"; // This is a client component
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
import SocialFeedWidget from "../ui/social-feed-widget";

export default function Services() {

  return (
    <>
      <Navbar useScrollBehavior={false} />
      <section
        id="Social-feed"
        className="min-h-[calc(100svh-3rem)] max-h-max bg-slate-50 dark:bg-neutral-900 p-5
        sm:px-32
        lg:px-16"
      >
        <main className="h-full gap-8 py-8 mt-12">
          <h1 className="uppercase font-conduitbold text-2xl text-slate-900 dark:text-slate-50 text-center mb-8">
            Den Gode Historie
          </h1>
          <SocialFeedWidget />
        </main>
      </section>
      <Footer />
    </>
  );
}
