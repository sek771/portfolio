import PropTypes from "prop-types";
import Image from "next/image";
const Cardskills = (props) => {
  return (
    <div className="lg:flex lg:items-center ">
      <div
        className=" glass-1 flex items-center justify-center   "
      >
        <Image
          width={100}
          height={50}
          src={props.img}
          alt=""
          className=""
        />

   
      </div>
    </div>
  );
};
Cardskills.propTypes = {
  p: PropTypes.string,
  img: PropTypes.string,
};
export default Cardskills;
