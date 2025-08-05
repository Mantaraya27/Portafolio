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
        <section id="home">
          <Hero />
        </section>
                            <section id="projects">
                      <AboutMe />
                      <SkillsCarousel />
                      <PortfolioGrid />
                    </section>
        <section id="about">
          <Timeline />
          <Marquee />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>
    </>
  )
}
