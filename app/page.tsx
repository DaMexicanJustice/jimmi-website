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
      <Navbar useScrollBehavior={true}></Navbar>
      <main id="main" className="min-h-svh min-w-svh">
        <Hero></Hero>
        <History></History>
        <Services></Services>
        <Dna></Dna>
        <Environment></Environment>
      </main>
      <Footer></Footer>
    </>
  );
}
