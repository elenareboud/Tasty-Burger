import React from "react";
import MenuCard from "./MenuCard";
import { burgers } from "./Menu.contant";




const Menu = () => {
  
  const addToCart = (itemId) => {
    console.log("Ajouté au panier :", itemId);
    
  };

  return (
    <div className="menu">
      <h1>Menu</h1>
      <div className="menu-container"> 
        {burgers.map((item) => (
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



