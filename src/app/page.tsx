import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
      </main>

      
    </div>

  );
}
