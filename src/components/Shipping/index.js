import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';


const Shipping = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [phonePrefix, setPhonePrefix] = useState("");


  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState(""); 
    const countryDetails = Country.getCountryByCode(e.target.value);
    setPhonePrefix(countryDetails.phonecode);
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  // const indianStates = State.getStatesOfCountry("IN");
  return (
    <section className="shipping-container">
      <div className="shipping">
        <h1>Détails de la livraison</h1>
        <form>
          <div>
            <label htmlFor="address">Adresse</label>
            <input type="text" id="address" placeholder="Votre adresse" />
          </div>
          <div>
            <label htmlFor="city">Ville</label>
            <input type="text" id="city" placeholder="Votre ville" />
          </div>
          <div>
              <label htmlFor="country">Pays</label>
              <select id="country" value={selectedCountry} onChange={handleCountryChange}>
              <option value="">Selectionner le pays</option>
              {Country.getAllCountries().map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>           
                ))}
            </select>
          </div>
          <div>
          <label>Etat/Région</label>
            <select value={selectedState} onChange={handleStateChange} disabled={!selectedCountry}>
              <option value="">Selectionner état/région</option>
              {State.getStatesOfCountry(selectedCountry).map((state) => (
                <option key={state.isoCode} value={state.isoCode}>
                  {state.name}
                {/* {indianStates.map(state => (
                <option value={state.isoCode}>{state.name} */}
              </option>
                ))}
              </select>
          </div>
          <div>
            <label htmlFor="code">Code postale</label>
            <input id="code" type="number" placeholder="Votre code postale" style={{marginLeft:'2px'}}/>
          </div>
          <div>
            <label htmlFor="tel" style={{ marginRight: '0' }}>N° de téléphone</label>
              <span style={{ padding: '10px' }}>+{phonePrefix}</span>
              <input id="tel" 
                type="text" 
                placeholder="Votre N° de téléphone" 
                style={{ flex: 1, marginLeft: '1px' }} 
              />
            </div>
          <Popup className="popup" trigger=
            {<Link to="/myOrders" >Confirmer la commande</Link>}
            position="top right">
            <div style={{ color: "red",   transform: 'translate(-20%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
              Commande confirmée
            </div>
          </Popup>
        </form>
      </div>
    </section>
  );
};

export default Shipping;
