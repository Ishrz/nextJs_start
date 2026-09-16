import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OfferBaner from "../components/OfferBaner";
import Products from "../components/Products";
import WhyUs from "../components/WhyUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <Navbar/>

      <Hero/>
      
      <Categories/>
      
      <Products/>
      
      <OfferBaner/>

      <WhyUs/>

      <Footer/>
      

    </main>
  );
}