import Main from "../components/layouts/main";

import Introduction from "./section/introduction";
import Skills from "./section/skills";
import Projects from "./section/projects";
import Timeline from "./section/timeline";
import Contact from "./section/contact";

const Home = () => {
  return (
    <Main>
      <Introduction />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </Main>
  );
};

export default Home;
