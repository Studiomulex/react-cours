import { useState,useEffect } from "react";
import PropTypes from "prop-types";
export default function Card({ card, updateCard }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = card.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );
  return isOpen ? (
    <div className="bg-green-600 h-dvh w-[40%]">
      <button
        className="bg-red-400 p-2 m-1 rounded-md"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      {card.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {card.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
              </div>
            ))}
          </ul>
          <h3>Total :{total}€</h3>
          <button
            onClick={() => updateCard([])}
            className="bg-red-500 p-1 rounded-md m-1"
          >
            Vider le panier
          </button>
        </div>
      ) : (
        <div className="bg-red-50 p-5 m-1 rounded-md">
          Votre panier est vide
        </div>
      )}
    </div>
  ) : (
    <div>
      <button
        className="bg-red-400 p-2 m-1 rounded-md"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}
Card.propTypes = {
  card: PropTypes.number.isRequired,
  updateCard: PropTypes.func.isRequired,
};
