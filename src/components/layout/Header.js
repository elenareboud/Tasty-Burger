import React from "react";
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import "../../styles/components/_header.scss";

const NavItem = ({ name, path }) => (
  <li >
    <Link className="nav__link" to={path}>
      {name}
    </Link>
  </li>
);

function Header() {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const burgers = useSelector((state) => state.burgerReducer.burgers);
  const cartCount = burgers.length;

  let pages = [
    { name: "Accueil", path: "/" },
    { name: "A propos", path: "/about" },
    { name: "Menus", path: "/menu" },
    { name: "Nous contacter", path: "/contact" },
    { name: "Se connecter", path: "/login" },
    
  ];

  return (
    <nav >
      <div className="logo" alt="">
            <IoFastFoodOutline />
      </div>
      <ul className="nav__links">
        {pages.map((item, index) => (
          <NavItem  key={index} name={item.name} path={item.path} />
        ))}
      </ul>  
      <Link to="/cart" className="iconeCart" alt="cart">
        <IoCartOutline />
          <span >
            {cartCount}
          </span>
      </Link>
    </nav>
  );
}

export default Header;
