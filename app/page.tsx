import { Toaster } from "react-hot-toast";
import Dna from "./dna/page";
import Environment from "./environment/page";
import Hero from "./hero/page";
import History from "./history/page";
import Services from "./services/page";
import Footer from "./ui/footer";
import Navbar from "./ui/navbar";
import "/app/styles/styles.css";

export default function Home() {
  return (
    <>
      <div>
        <Toaster position="bottom-center" />
      </div>
      <Navbar useScrollBehavior={true}></Navbar>
      <main id="main" className="min-h-svh min-w-svh">
        <Hero></Hero>
        {/* <div
          className="bg-parallax bg-gradient-to-b from-slate-100 to-slate-50
        dark:from-neutral-800 dark:to-neutral-900"
        ></div> */}
        <History></History>
        <Services></Services>
        <Dna></Dna>
      </main>
      <Environment></Environment>
      <Footer></Footer>
    </>
  );
}
