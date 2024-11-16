import { useState } from "react";
import { plantList } from "../data/PlantList";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import PropTypes from "prop-types";

export default function ShoppingList({ card, updateCard }) {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  function addToCart(name, price) {
    const currentPlantSaved = card.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = card.filter(
        (plant) => plant.name !== name
      );
      updateCard([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCard([...card, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="flex flex-col gap-2 items-center">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      <ul className="flex gap-2 h-dvh flex-wrap w-[90%] p-2">
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          !activeCategory || activeCategory === category ? (
            <div key={id} className="flex flex-col gap-2">
              <PlantItem
                cover={cover}
                name={name}
                water={water}
                light={light}
                price={price}
              />
              <button
                onClick={() => addToCart(name, price)}
                className="bg-green-600 p-2 rounded-md"
              >
                Ajouter
              </button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}

ShoppingList.propTypes = {
  card: PropTypes.number.isRequired,
  updateCard: PropTypes.func.isRequired,
};
