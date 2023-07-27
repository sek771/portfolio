import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="grid justify-items-center py-3">
      <h1>{props.title}</h1>
      <img width={50} height={50} src={props.img} alt="" />
      <button onClick={props.onClick}>En savoir plus</button>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  onClick: PropTypes.func
};

export default Card;
