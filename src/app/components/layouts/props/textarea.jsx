import PropTypes from "prop-types";

const textarea = (props) => {
  return (
    <>
      <textarea
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        value={props.value}
      />
    </>
  );
};
textarea.propTypes={
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    
};
export default textarea;