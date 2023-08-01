const HeaderDesktop = () => {
  return (
    <header className="bg-cyan-100">
      <div className="w-full">
        <ul className="hidden lg:flex lg:flex-row lg:justify-center lg:list-none lg:py-5">
          <li className="mx-5">
            <a href="#">Accueil</a>
          </li>
          <li className="mx-5">
            <a href="#">Présentation</a>
          </li>
          <li className="mx-5">
            <a href="#">Projets</a>
          </li>
          <li className="mx-5">
            <a href="#">Compétences</a>
          </li>
          <li className="mx-5">
            <a href="#">Parcours</a>
          </li>
          <li className="mx-5">
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">CV</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default HeaderDesktop;
