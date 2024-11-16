import PropTypes from "prop-types";
import { useState } from "react";
export default function Card({card,updateCard}) {
  const [isOpen, setIsOpen] = useState(true);
  const monsteraPrice = 8;
  return isOpen ? (
    <div className="bg-green-700 w-[20%] h-dvh flex flex-col ">
      <button
        onClick={() => setIsOpen(false)}
        className="bg-red-200 m-1 p-1 rounded-md"
      >
        Fermer le panier
      </button>
      <h2 className="m-1">Panier</h2>
      <div className="flex flex-col gap-1 m-1">
        Monstera : {monsteraPrice}€
        <button
          onClick={() => updateCard(card + 1)}
          className="bg-red-400 rounded-xl px-2 py-2 w-[100px]"
        >
          Ajouter
        </button>
        <button
          onClick={() => updateCard(0)}
          className="bg-red-200 p-2  rounded-lg"
        >
          Vider le panier
        </button>
      </div>
      <h3 className="bg-slate-100 w-[200px] m-1 p-2 rounded-lg">
        Total : {monsteraPrice * card}€
      </h3>
    </div>
  ) : (
    <div className="bg-green-700 w-[20%] h-dvh">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-pink-200 w-[100px] h-[50px] m-5 rounded-sm"
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.number.isRequired, // Nombre d'articles
  updateCard: PropTypes.func.isRequired, // Fonction pour mettre à jour le panier
};
