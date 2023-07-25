import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        value={props.value}
      />
    </>
  );
};
Input.propTypes={
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    
};
export default Input;