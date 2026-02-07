import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import TeamLead from "@/components/TeamLead";
import Outreach from "@/components/Outreach";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <TeamLead />
      <Outreach />
      <Programs />
      <Gallery />
      <Events />
      <Testimonials />
      <Contact />
    </>
  );
}
