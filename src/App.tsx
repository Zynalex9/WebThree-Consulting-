import "./App.css";
import "./fonts.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Tagline from "./components/Tagline";
import Services from "./components/Services";
import Team from "./components/Team";
import Loader from "./components/Loader";
import Form from "./components/Form";
import ButtonSection from "./components/ButtonSection";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-black min-h-screen w-full text-main-white selection:bg-main-green selection:text-black">
      <Loader />
      <NavBar />
      <Hero />
      <Tagline />
      <Services/>
      <Team/>
      <Form/>
      <ButtonSection/>
      <Footer/>
    </main>
  );
}

export default App;
