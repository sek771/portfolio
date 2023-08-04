const Timeline = () => {
  return (
    <section className="px-5 lg:px-72 ">
      <div className="uppercase text-center pt-10">
        <h1 className="text-4xl">parcours</h1>
      </div>
      <div className="pt-5 grid grid-cols-1 justify-items-center glass">
        <div className="mx-3">
          <li className="py-5 text-2xl">
           J&apos;ai obtenu mon brevet des colléges. 
          </li>
          <li className="py-5 text-2xl">
            J&apos;ai participé a un atelier d&apos;une semaine sur le développement web intitulé &quot;Digi&apos;code.&#34;
          </li>
          <li className="py-5 text-2xl">
            J&apos;ai suivi une formation en développement web et web mobile, me permettant d&apos;obtenir une équivalence bac+2 en back-end et front-end.
          </li>
         
        </div>
      </div>
    </section>
  );
};

export default Timeline;
