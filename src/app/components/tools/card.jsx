import PropTypes from "prop-types";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className="my-4 lg:w-[300px]">
      <div className="glass grid justify-items-center glass-2">
        <h1 className="">{props.title}</h1>
        <Image
          width={100}
          height={50}
          src={props.img}
          alt=""
          className="lg:py-8"
        />
        <button onClick={props.onClick}>En savoir plus</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
