const Introduction = () => {
  return (
    <>
      <section className=" grid grid-cols-1 justify-items-center px-5 ">
        <div>
          <div>
            <h2 className="uppercase mt-5 text-center text-4xl lg:pb-24">
              presentation
            </h2>
          </div>
          
          <div
            className="glass lg:mx-28 grid grid-cols-1 justify-items-center glass-3">
            <div >
              <img
                src="/introduction img/miles.png"
                width={250}
                height={150}
                alt="Picture of the author"
                className="py-5 lg:pt-24"
              />
            </div>

            <div className="lg:grid lg:justify-items-center">
              <p className=" text-3xl text-center lg:px-40 pb-5 mx-4 lg:grid lg:justify-items-center">
                Bonjour, je suis SEKOU SACKO, bienvenue sur mon portfolio en
                développement web et web mobile ! Découvrez mes projets et
                compétences en création de sites web. Passionné par la
                construction de sites beaux, fonctionnels et responsive.
                N'hésitez pas à explorer mes projets et à me contacter pour
                discuter de vos idées et projets passionnants.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
