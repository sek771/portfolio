import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "projet agence web",
      img: "/project-img/uchiwa.png",
      href: "https://deep-404.netlify.app/",
    },
    {
      title: "Projet personnel",
      img: "/project-img/uchiwa.png",
      href: "",
    },
    {
      title: "portfolio",
      img: "/project-img/uchiwa.png",
      href: "",
    },
    {
      title: "Projet digicodes",
      img: "/project-img/digicodes.png",
      href: "https://digicodes.fr/sekou/",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-16 text-center "
    >
      <h1
        className="text-3xl md:text-4xl font-bold mb-12"
        style={{ color: "#b28c2f" }}
      >
        Mes Projets
      </h1>
      <div className="grid justify-items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {projects.map(({ title, img, href }) => (
            <div
              key={title}
              className="border border-[#b28c2f] flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <Image src={img} alt="" width={1} height={1} />
              <a href={href}>
                <h3 className="text-lg font-semibold">{title}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
