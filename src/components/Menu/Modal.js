import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/burgerSlice";
import "../../styles/components/_modal.scss";

const Modal = ({ item, isModalOpen, toggleModal }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...item, quantity: qty }));
    toggleModal();
  };

  return (
    <div className={`my-modal fade ${isModalOpen ? 'show' : ''}`}>
      <div className="my-modal-dialog">
        <div className="my-modal-content">
          <div className="my-modal-header">
            <h5 className="my-modal-title">{item.title}</h5>
            <button type="button" className="my-modal-close" onClick={toggleModal}>
              &times;
            </button>
          </div>
          <div className="my-modal-body">
            <img src={item.imageSrc} alt={item.title}  />
            <p>{item.title}</p>
            <h3 className="price"> {item.price} &euro;</h3>
            <div className="quantity-control">
              <button className="left" type="button" onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
              <span className="quantity">{qty}</span>
              <button className="right" type="button" onClick={() => setQty(qty + 1)}>+</button>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" onClick={toggleModal}>Fermer</button>
            <button type="button" onClick={handleAddToCart}>Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
