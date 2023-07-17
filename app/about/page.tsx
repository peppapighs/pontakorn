import Footer from "components/Footer";
import Header from "components/Header";

export default function Page() {
  return (
    <div className="bg-black">
      <div className="min-h-screen w-full">
        <Header />
        <section className="w-full py-12"></section>
      </div>
      <Footer />
    </div>
  );
}
