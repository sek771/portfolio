import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <section className=" py-6">
      <div className="py-6 glass grid justify-items-center glass-1"
      data-aos={"flip-up"}
      >
        <h1>{props.title}</h1>
        <img width={100} height={50} src={props.img} alt=""  />
        <button onClick={props.onClick}>En savoir plus</button>
      </div>
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
