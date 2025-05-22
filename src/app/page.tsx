import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="scroll-smooth relative h-fit flex justify-center items-center flex-col overflow-hidden  mx-auto sm:px-10 px-5">
      <div className="">
        <Hero/>
        <About/>
      </div>
    </main >
  );
}
