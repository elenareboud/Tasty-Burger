import React from "react";
import MenuCard from "./MenuCard";
// import { burgers } from "./Menu.contant";
import "../../styles/components/_menu.scss";
import burger1 from "../../assets/beefburger.jpg";
import burger2 from "../../assets/frites.jpg";

const Menu = () => {
  // Exemple de données de menu
  const menuItems = [
    { id: 1, title: "Beef Burger", price: 8.99, imageSrc: burger1 },
    { id: 2, title: "Burger Végétarien", price: 9.99, imageSrc: burger2 },
    { id: 3, title: "Burger Végétarien", price: 9.99, imageSrc: burger2 },
    { id: 4, title: "Burger Végétarien", price: 9.99, imageSrc: burger2 },
    { id: 5, title: "Burger Végétarien", price: 9.99, imageSrc: burger2 },
    { id: 6, title: "Burger Végétarien", price: 9.99, imageSrc: burger2 },
    // Ajoutez d'autres éléments de menu ici
  ];

  // Fonction pour gérer l'ajout au panier
  const addToCart = (itemId) => {
    console.log("Ajouté au panier :", itemId);
    
  };

  return (
    <div className="menu">
      <h1>Menu</h1>
      <div className="menu-container"> 
        {menuItems.map((item) => (
          <MenuCard
            key={item.id}
            itemNum={item.id}
            burgerSrc={item.imageSrc}
            price={item.price}
            title={item.title}
            handler={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;



