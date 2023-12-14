import React, {useState} from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/beefburger.jpg";
import burger2 from "../../assets/frites.jpg";
import burger3 from "../../assets/burger3 .png";


const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt={title}/>
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [quantities, setQuantities] = useState({ burger1: 0, burger2: 0, burger3: 0 });
  const increment = (item) => {
    setQuantities(prevQuantities => ({
        ...prevQuantities,
        [item]: prevQuantities[item] + 1
    }));
};


const decrement = (item) => {
  setQuantities(prevQuantities => ({
    ...prevQuantities,
    [item]: Math.max(prevQuantities[item] - 1, 0)
  }));
};

  return (
    <section className="cart-container">
      <div className="cart">
        <CartItem
          title={"Beef Burger"}
          img={burger1}
          value={quantities.burger1}
          increment={() => increment('burger1')}
          decrement={() => decrement('burger1')}
        />
        <CartItem
          title={"Frites"}
          img={burger2}
          value={quantities.burger2}
          increment={() => increment('burger2')}
          decrement={() => decrement('burger2')}
        />

        <CartItem
          title={"Maxi Burger"}
          img={burger3}
          value={quantities.burger3}
          increment={() => increment('burger3')}
          decrement={() => decrement('burger3')}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <span>{5}€</span>
          </div>
          <div>
            <h4>Taxe</h4>
            <span>{17.5 * 0.18}€</span>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <span>{1.5}€</span>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <span>{17.5 + 17.5*0.18 + 1.5}€</span>
          </div>
          <Link to="/shipping">Payer</Link>
        </article>
      </div>
    </section>
  );
};

export default Cart;
