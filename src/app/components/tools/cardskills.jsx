import PropTypes from "prop-types";
import Image from "next/image";
const Cardskills = (props) => {
  return (
    <div className="text-center">
      <div
        className="p-4 glass-1 grid justify-items-center"
        data-aos={"zoom-in-down"}
      >
        <Image
          width={125}
          height={125}
          src={props.img}
          alt=""
          className="py-2 px-2 grid"
        />

        <h2 className="italic py-2">{props.p}</h2>
      </div>
    </div>
  );
};
Cardskills.propTypes = {
  p: PropTypes.string,
  img: PropTypes.string,
};
export default Cardskills;
