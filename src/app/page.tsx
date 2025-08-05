import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AboutMe from "./components/WearYourStory"
import SkillsCarousel from "./components/FeatureCarousel"
import PortfolioGrid from "./components/PortfolioGrid"
import Timeline from "./components/Timeline"
import Marquee from "./components/Marquee"
import ContactForm from "./components/ContactForm"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="pt-16">
          <Hero />
        </section>
        <section id="about" className="pt-16">
          <AboutMe />
        </section>
        <section id="projects" className="pt-16">
          <PortfolioGrid />
        </section>
        <section id="skills" className="pt-16">
          <SkillsCarousel />
        </section>
        <section id="experience" className="pt-16">
          <Timeline />
          <Marquee />
        </section>
        <section id="contact" className="pt-16">
          <ContactForm />
        </section>
      </main>
    </>
  )
}
