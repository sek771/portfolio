import Main from "@/app/components/layouts/main";
import Welcome from "@/app/home/section/welcome"; // Renommé pour plus de clarté
import Introduction from "@/app/home/section/introduction";
import Skills from "@/app/home/section/skills";
import Projects from "@/app/home/section/projects";
import Timeline from "@/app/home/section/timeline";
import Contact from "@/app/home/section/contact";

const Home = () => {
  return (
    <Main className="overflow-x-hidden">
      <Welcome />
      <Introduction />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </Main>
  );
};

export default Home;
