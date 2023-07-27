import PropTypes from "prop-types";

const Main = ({ className, children }) => {
  return <main className={`bg-white ${className}`}>{children}</main>;
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
