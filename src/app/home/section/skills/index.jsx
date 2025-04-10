import { useEffect } from "react";
import {
  Code2,
  Palette,
  Braces,
  AtomIcon,
  Rocket,
  Server,
  Wind,
  GitBranch,
  Database,
  Lock,
  Globe,
  Cpu,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    {
      name: "Frontend Development",
      icon: Code2,
      description: "HTML5, CSS3, JavaScript",
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      description: "Responsive Design, Animations",
    },
    {
      name: "JavaScript",
      icon: Braces,
      description: "Modern JavaScript Development",
    },
    { name: "React", icon: AtomIcon, description: "Modern Web Applications" },
    { name: "Next.js", icon: Rocket, description: "Server-side Rendering" },
    { name: "Node.js", icon: Server, description: "Backend Development" },
    { name: "Tailwind CSS", icon: Wind, description: "Utility-first CSS" },
    { name: "Git & GitHub", icon: GitBranch, description: "Version Control" },
    { name: "SQL & NoSQL", icon: Database, description: "Data Management" },
    {
      name: "Security",
      icon: Lock,
      description: "Web Security Best Practices",
    },
    { name: "API Design", icon: Globe, description: "RESTful & GraphQL APIs" },
    { name: "Performance", icon: Cpu, description: "Optimization & Testing" },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <section className="grid justify-items-center bg-gray-900 text-white py-16 px-4">
        <div className="w-full max-w-7xl">
          <h1
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-extrabold mb-16 text-center"
            style={{ color: "#b28c2f" }}
          >
            Compétences Techniques
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map(({ name, icon: Icon, description }, index) => (
              <div
                key={name}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="border border-[#b28c2f] p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:border-opacity-75 group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-gray-700 group-hover:bg-gray-600 transition-colors">
                    <Icon className="w-8 h-8 text-[#b28c2f]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#b28c2f]">
                    {name}
                  </h3>
                  <p className="text-gray-300 text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
