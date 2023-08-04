const Timeline = () => {
  return (
    <section className="px-5 lg:px-72 ">
      <div className="uppercase text-center pt-10">
        <h1 className="text-4xl ">parcours</h1>
      </div>
      <div className="pt-5 grid grid-cols-1 justify-items-center glass">
        <div className="mx-3">
          <li className="py-5 text-2xl">
           J'ai obtenu mon brevet des colléges.
          </li>
          <li className="py-5 text-2xl">
            J'ai participé a un atelier d'une semaine sur le développement web intitulé "Digi'code."
          </li>
          <li className="py-5 text-2xl">
            J'ai suivi une formation en développement web et web mobile, me permettant d'obtenir une équivalence bac+2 en back-end et front-end.
          </li>
         
        </div>
      </div>
    </section>
  );
};

export default Timeline;
