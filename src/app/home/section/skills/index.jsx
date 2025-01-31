const skills = () => {
  const skill = [
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
    <section id="skills" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Mes Compétences
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skill.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <span className="text-4xl mb-4">{skill.icon}</span>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default skills;
