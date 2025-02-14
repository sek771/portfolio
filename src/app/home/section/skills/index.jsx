const Skills = () => {
  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "🚀" },
    { name: "Node.js", icon: "🌳" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Git", icon: "🔧" },
  ];

  return (
    <section id="skills" className="bg-gray-900 text-white py-16 text-center ">
      <h1
        className="text-3xl md:text-4xl font-bold mb-12"
        style={{ color: "#b28c2f" }}
      >
        Mes Compétences
      </h1>
      <div className="grid justify-items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {skills.map(({ name, icon }) => (
            <div
              key={name}
              className="border border-[#b28c2f] flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <span className="text-4xl mb-4">{icon}</span>
              <h3 className="text-lg font-semibold">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
