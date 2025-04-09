import PropTypes from "prop-types";

const Main = ({ className = "", children }) => {
  return <main className={className}>{children}</main>;
};

Main.propTypes = {
  className: PropTypes.string, // Vérifie que className est une chaîne
  children: PropTypes.node, // Vérifie que children est un élément React valide
};

export default Main;
