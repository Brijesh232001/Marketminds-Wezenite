

import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Know from "./components/Know";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Header from "./components/Header";


export default function Home() {
  return (
   <>
    <Header />
        <br></br>
        <br></br>
   <Hero/>

   <section id="how-it-works">
   <Services/>
   </section>

   <Know/>
   <Features/>

   <div style={{ height: '100px' }} />
   <section id="faq">
   <FAQ/>
   </section>

   <div style={{ height: '100px' }} />
   <section id="contact">
   <Contact/>
   </section>

   <Footer/>
   </>
  );
}
