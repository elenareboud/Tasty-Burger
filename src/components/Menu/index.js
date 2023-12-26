import React from "react";
import MenuCard from "./MenuCard";
import { burgers } from "./Menu.contant";

const Menu = () => {
  
  return (
    <div className="menu">
      <h1>Menu</h1>
      <div className="menu-container"> 
        {burgers.map((burger) => (
          <MenuCard
            key={burger.id}
            item={burger}
          />)
          )}
      </div>
    </div>
  );
};

export default Menu;



