import Footer from "components/Footer";
import Header from "components/Header";
import Hero from "components/Hero";
import Project from "components/Project";
import Warp from "components/Warp";

export default function Page() {
  return (
    <div className="bg-black">
      <div className="min-h-screen w-full">
        <div className="relative h-screen w-full">
          <Warp className="absolute inset-0 opacity-40" />
          <Hero className="absolute inset-0 z-10 flex flex-col justify-center" />
          <Header className="absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black" />
        </div>
        <Project />
      </div>
      <Footer />
    </div>
  );
}
