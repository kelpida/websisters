import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO
        title="Web Development & Digital Solutions"
        description="Two sisters crafting beautiful websites, email solutions, and digital experiences in Cyprus. Professional web development, email signatures, hosting, and newsletter design."
        keywords="web development Cyprus, website design, email signatures, hosting, newsletter design, email setup, digital agency Cyprus"
        url="https://websisters.cy"
        type="website"
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
