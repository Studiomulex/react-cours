import Banner from "./components/Banner";
import Card from "./components/Card";
import ShoppingList from "./components/ShoppingList";
import "./App.css";
import { useState,useEffect } from "react";
export default function App() {
  const savedCart = localStorage.getItem('cart')
	const [card, updateCard] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(card))
	}, [card])
 
  return (
    <div className="h-dvh w-full flex flex-col">
      <Banner />
      <div className="flex h-dvh gap-2">
        <Card card={card} updateCard={updateCard} />
        <ShoppingList card={card} updateCard={updateCard} />
      </div>
    </div>
  );
}
