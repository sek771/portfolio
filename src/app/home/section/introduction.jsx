const Introduction = () => {
  return (
    <>
      <section className=" grid grid-cols-1 items-center px-5 ">
        <div>
          <h2 className="uppercase mt-5 text-center text-4xl ">presentation</h2>
        </div>
        <div
          className="glass lg:mx-28 grid grid-cols-1 justify-items-center"
          he
        >
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBIj-Fgl0dW6F4z2Ouzoji7eUj3nGUGGha0Q&usqp=CAU"
              width={150}
              height={150}
              alt="Picture of the author"
              className="py-5"
            />
          </div>
  
          <div>
            <p className=" text-3xl text-center lg:mx-16 pb-5 mx-4">
              Bonjour, je suis SEKOU SACKO, bienvenue sur mon portfolio en
              développement web et web mobile ! Découvrez mes projets et
              compétences en création de sites web. Passionné par la
              construction de sites beaux, fonctionnels et responsive. N'hésitez
              pas à explorer mes projets et à me contacter pour discuter de vos
              idées et projets passionnants.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
