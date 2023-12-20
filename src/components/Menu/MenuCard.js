import React, { useState }  from "react";
import Popup from 'reactjs-popup';
import "../../styles/components/_card.scss";



const MenuCard = ({ itemNum, burgerSrc, price, title, handler}) => {
  return (
    <div className="Card">
        <img src={burgerSrc} alt={title} />

        <h5>&euro;{price}</h5>

        <p>{title}</p>
        <Popup trigger=
          {<button onClick={() => handler(itemNum, price)}>Acheter</button>}
        >
          <div className="popup" style={{ color: "red", fontWheight: "700", transform: 'translate(50%,-310%)', 
          backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}
          >
              Ajouté à votre panier!
          </div>
        </Popup>
        
    </div>
    
  );
};

export default MenuCard;
