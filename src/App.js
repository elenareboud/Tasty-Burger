import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Shipping from "./components/Shipping";
import MyOrders from "./components/myOrders";

import OrderDetails from "./components/OrderDetails";
import About from "./components/About";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Header /> 
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/about" element={< About />} />
        <Route path="/menu" element={< Menu />} />
        <Route path="/cart" element={< Cart />} />
        <Route path="/shipping" element={< Shipping />} />
        <Route path="/myOrders" element={< MyOrders />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
