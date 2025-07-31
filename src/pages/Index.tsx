import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LoanServices from "@/components/LoanServices";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LoanServices />
      <Statistics />
      <Testimonials />
      <About />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
