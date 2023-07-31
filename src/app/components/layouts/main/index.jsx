import PropTypes from "prop-types";

const Main = ({ className, children }) => {
  return <main className={`${className}`}>{children}</main>;
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
