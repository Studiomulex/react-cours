import PropTypes from "prop-types";
import { plantList } from "../data/PlantList";
import PlantItem from "./PlantItem";

export default function ShoppingList({ card, updateCard }) {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div className="flex items-center justify-center gap-1 w-4/5">
      <ul className="bg-red-100 p-2 self-start">
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className=" flex items-center justify-center w-4/5 h-[100%] flex-wrap gap-2 p-2 overflow-scroll ">
        {plantList.map(({ id, cover, name, water, light }) => (
          <div key={id}>
            <PlantItem
              key={id}
              id={id}
              cover={cover}
              name={name}
              water={water}
              light={light}
            />
            <button
              onClick={() => updateCard(card + 1)}
              className="bg-red-400 p-2 rounded-md"
            >
              Ajouter
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
ShoppingList.propTypes = {
  card: PropTypes.number.isRequired, // Nombre d'articles
  updateCard: PropTypes.func.isRequired, // Fonction pour mettre à jour le panier
};
