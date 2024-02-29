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
      <header></header>
      <Navbar></Navbar>
      <main className="min-h-svh">
        <Hero></Hero>
        <Services></Services>
        <History></History>
        <Dna></Dna>
        <Environment></Environment>
        <Footer></Footer>
      </main>
    </>
  );
}
