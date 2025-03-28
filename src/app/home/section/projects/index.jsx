import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Projet Agence Web",
      img: "/project-img/uchiwa.png",
      href: "https://deep-404.netlify.app/",
    },
    {
      title: "Projet Personnel",
      img: "/project-img/uchiwa.png",
      href: "",
    },
    {
      title: "Portfolio",
      img: "/project-img/uchiwa.png",
      href: "",
    },
    {
      title: "Projet Digicodes",
      img: "/project-img/digicodes.png",
      href: "https://digicodes.fr/sekou/",
    },
  ];

  return (
    <section id="project" className="bg-gray-900 text-white py-16 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-12 text-[#b28c2f]">
        Projets
      </h1>
      <div className="grid justify-items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-4">
          {projects.map(({ title, img, href }, index) => (
            <div
              key={title}
              data-aos="zoom-in"
              data-aos-delay={index * 100} // Décalage des animations
              className="group relative border border-[#b28c2f] bg-gray-800 rounded-lg shadow-2xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <Image
                src={img}
                alt={title}
                width={400}
                height={300}
                layout="intrinsic"
                objectFit="cover"
                className="group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent opacity-80">
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-semibold text-[#b28c2f]">
                    {title}
                  </h3>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
