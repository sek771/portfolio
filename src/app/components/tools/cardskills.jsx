import PropTypes from "prop-types";
import Image from 'next/image'
const Cardskills = (props) => {
  return (
    <div className="grid justify-items-center text-center py-5">
      <div className="glass-4 " data-aos={"zoom-in-down"}>
        <Image
          width={125}
          height={125}
          src={props.img}
          alt=""
          className="py-2 px-2 grid"
        />

        <p className="text-2xl lg:text-4xl lg:py-2">{props.p}</p>
      </div>
    </div>
  );
};
Cardskills.propTypes = {
  p: PropTypes.string,
  img: PropTypes.string,
};
export default Cardskills;
