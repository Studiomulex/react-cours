import PropTypes from "prop-types";
import CareScale from "./CareScale";

export default function PlantItem({ id, cover, name, water, light }) {
  const handleClick = (plantName) => {
    alert(`vous voulez acheter 1 ${plantName} c'est super`);
  };
  return (
    <div>
      <li
        key={id}
        onClick={() => handleClick(name)}
        className="bg-orange-200 w-[250px]"
      >
        <img className=" w-full h-[200px]" src={cover} alt={`${name} cover`} />
        {name}
        <div className="flex gap-1">
          <CareScale careType="water" scaleValue={water} />
          <CareScale careType="light" scaleValue={light} />
        </div>
      </li>
    </div>
  );
}

PlantItem.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  water: PropTypes.number.isRequired,
  light: PropTypes.number.isRequired,
};