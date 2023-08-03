const FooterDesktop = () => {
  return (
    <footer className="hidden w-full bg-cyan-700 lg:grid grid-rows-2 justify-items-center">
      <section className="grid grid-cols-2">
        <div>
          {" "}
          <ul>
            <h1 className="uppercase py-5 pl-10 text-3xl">sékou sacko</h1>
          </ul>
          <p className="px-5 mx-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            iusto possimus neque rerum magni quisquam odit impedit nostrum
            corrupti molestias. Ducimus quas natus voluptatibus eaque voluptatem
            modi commodi quaerat rerum.
          </p>
        </div>
        <div className="pl-96">
          <ul>
            <h1 className="py-5 pl-5 text-3xl">SOCIAL</h1>
          </ul>
          <div className="flex align-baseline">
            <div className="py-5 px-5">
              <img
                src="/footer img/linkedin.svg/"
                alt="linkedin"
                width="50px"
                height="50px"
              />
            </div>
            <div className="py-5 px-5">
              <img
                src="/footer img/github.svg/"
                alt="github"
                width="50px"
                height="50px"
              />
            </div>
          </div>
        </div>
      </section>
      <div>
        <p>© Copyright 2023. Made by Sékou Sacko</p>
      </div>
    </footer>
  );
};
export default FooterDesktop;
