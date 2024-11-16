import PropTypes from "prop-types";
import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

//Vous auriez aussi pu utiliser une fonction qui retourne l'élément souhaité, ou bien faire directement des conditions
const quantityLabel = {
  1: "peu",
  2: "modérément",
  3: "beaucoup",
};

export default function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );

  return (
    <div
      onClick={() =>
        alert(
          `Cette plante requiert ${quantityLabel[scaleValue]} ${
            careType === "light" ? "de lumière" : "d'arrosage"
          }`
        )
      }
      className="flex gap-1 items-center justify-center"
    >
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()} className="bg-teal-300">{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

CareScale.propTypes = {
  scaleValue: PropTypes.number.isRequired,
  careType: PropTypes.oneOf(["light", "water"]).isRequired,
};
