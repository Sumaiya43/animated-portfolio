import "./app.scss"
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section>
      <Navbar/>
    </section>
    <section >Parallax</section>
    <section id="Services">Service</section>
    <section >Parallax</section>
    <section id="Porfolio">Porfolio1</section>
    <section>Porfolio2</section>
    <section>Porfolio3</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
