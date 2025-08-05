import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Página principal del portafolio
export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
    </div>
  );
}
