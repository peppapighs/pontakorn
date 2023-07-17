import About from "components/About";
import Footer from "components/Footer";
import Header from "components/Header";

export default function Page() {
  return (
    <div className="bg-black">
      <div className="min-h-screen w-full">
        <Header />
        <About />
      </div>
      <Footer />
    </div>
  );
}
