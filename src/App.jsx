import Banner from "./components/Banner";
import Card from "./components/Card";
import ShoppingList from "./components/ShoppingList";
// import Categories from "./components/Categories";
import "./App.css";
import { useState } from "react";
export default function App() {
  const[card,updateCard]=useState([])
  return (
    <div className="h-dvh w-full flex flex-col">
      <Banner />
     <div className="flex h-[90dvh]">
     <Card card={card} updateCard={updateCard}/>
     <ShoppingList card={card} updateCard={updateCard}/>
     </div>
    </div>
  );
}
 