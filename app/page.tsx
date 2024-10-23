import { Toaster } from "react-hot-toast";
import Dna from "./dna/page";
import Environment from "./environment/page";
import Hero from "./hero/page";
import History from "./history/page";
import Services from "./services/page";
import Footer from "./ui/footer";
import Navbar from "./ui/navbar";
import "/app/styles/styles.css";
import Divider from "./divider/page";

export default function Home() {
  return (
    <>
      <div>
        <Toaster position="bottom-center" />
      </div>
      <Navbar useScrollBehavior={true}></Navbar>
      <main
        id="main"
        className="min-h-svh min-w-svh bg-slate-50 dark:bg-neutral-900 overflow-x-hidden"
      >
        <Hero></Hero>
        {/* <div
          className="bg-cover bg-[url('/images/abc.jpg')] h-full
          w-full bg-fixed bg-center absolute -z-10 bg-no-repeat"
        ></div> */}
        <History></History>
        <Services></Services>
        <Dna></Dna>
      </main>
      <Divider />
      <Environment></Environment>
      <Footer></Footer>
    </>
  );
}
