import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";

const App = () => {
  return <div>
      <section id="Homepage">
          <Navbar />
          <Hero />
      </section>
      <section id="Services" >
         <Parallax type="services" />
      </section>
      <section>
         <Services />
        </section>
      <section ><Parallax type="portfolio" /></section>
      <section id="Porfolio">Porfolio1</section>
      <section>Porfolio2</section>
      <section>Porfolio3</section>
      <section id="Contact">Contact</section>
    </div>;
};

export default App;
