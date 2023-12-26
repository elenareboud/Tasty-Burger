import React, { useState }  from "react";
import Modal from "./Modal";
import "../../styles/components/_card.scss";


const MenuCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="Card">
    <img src={item.imageSrc} alt={item.title} />
      <h3>{item.price} &euro;</h3>
      <p>{item.title}</p>
      <button onClick={toggleModal}>Acheter</button>
      {isModalOpen && (
        <Modal
          item={item}
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};

export default MenuCard;