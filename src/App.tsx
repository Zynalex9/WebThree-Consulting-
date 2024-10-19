import "./App.css";
import "./fonts.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Tagline from "./components/Tagline";
import Services from "./components/Services";
import Team from "./components/Team";
import Loader from "./components/Loader";

function App() {
  return (
    <main className="bg-black min-h-screen text-main-white">
      <Loader/>
      <NavBar />
      <Hero />
      <Tagline />
      <Services/>
      <Team/>
    </main>
  );
}

export default App;
