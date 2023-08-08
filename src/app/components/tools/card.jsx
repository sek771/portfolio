import PropTypes from "prop-types";
import Image from 'next/image'

const Card = (props) => {
  return (
    <section className="my-16">
      <div className="h-100% glass grid justify-items-center glass-2"
      data-aos={"flip-up"}
      >
        <h1>{props.title}</h1>
        <Image width={100} height={50} src={props.img} alt=""  />
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
