import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Catalog from "@/components/Catalog";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-graphite">
      <Header />
      <Hero />
      <Featured />
      <Promo />
      <Catalog />
      <Reviews />
      <Footer />
    </main>
  );
};

export default Index;