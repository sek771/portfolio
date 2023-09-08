import Main from "@/app/components/layouts/main";
import Header from "@/app/home/section/welcome";
import Introduction from "@/app/home/section/introduction";
import Skills from "@/app/home/section/skills";
import Projects from "@/app/home/section/projects";
import Timeline from "@/app/home/section/timeline";
import Contact from "@/app/home/section/contact";
import ParticlesBackground from "../components/tools/particle";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Preload from "../components/tools/preloader/load";

const Home = () => {
  return (
    <>
      
      <Main className="bg-slate-800">
      
        <Header />
        <Introduction />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
        <ParticlesBackground />
      </Main>
    </>
  );
};

export default Home;
