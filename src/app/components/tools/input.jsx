import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <input
      type={props.type}
      className={`border-2 rounded-full bg-gray-200 ${props.className}`}
      placeholder={props.placeholder}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
