import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Deep404",
      img: "/project-img/deep-404.svg",
      href: "https://deep-404.netlify.app/",
    },
    {
      title: "Portfolio",
      img: "/project-img/logo-portfolio.png",
      href: "https://sacko-portfolio.fr",
    },
    {
      title: "Projet Digicodes",
      img: "/project-img/digicodes.png",
      href: "https://digicodes.fr/sekou/",
    },
    {
      title: "Goodness Perfect",
      img: "/project-img/goodness-pf.png",
      href: "https://goodness-pf.com/",
    },
    {
      title: "Lannkin",
      img: "/project-img/logo-lannkin.png",
      href: "https://lannkin.com/",
    },
    {
      title: "Call Connect Bénin",
      img: "/project-img/call-connect.png",
      href: "https://callconnect-benin.com/",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#b28c2f]">
          Projets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mx-2/4">
          {projects.map(({ title, img, href }, index) => (
            <a
              key={title}
              href={href.startsWith("http") ? href : `https://${href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800 border border-[#b28c2f] rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-900 transition-all transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={img}
                  alt={`Image du projet ${title}`}
                  fill
                  className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                />
              </div>
              <div className="p-4 text-center bg-gray-900">
                <h3 className="text-xl font-semibold text-[#b28c2f]">
                  {title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
