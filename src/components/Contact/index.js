import React, { useState } from 'react';
import burgerImage from '../../assets/burger2.png';
import Popup from 'reactjs-popup';

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Pour empêcher la soumission par défaut du formulaire
    setOpen(true); // Ouvre le popup

    setTimeout(() => {
      setOpen(false); // Ferme le popup après 5 secondes
    }, 5000); // Durée en millisecondes (5000 ms = 5 secondes)
  };

  
  return (
    <div className="contact-container">

      <form onSubmit={handleSubmit}>
        <h1>Nous contacter</h1>
        <input type="text" placeholder="Votre nom" />
        <input type="email" placeholder="Votre email" />
        <textarea placeholder="Votre message"></textarea>
        <Popup open={open} 
          trigger={<button type="submit">Envoyer</button>}
          onOpen={() => setOpen(true)}
        >
        <div className="popup" style={{ color: "red", fontWeight: "700", transform: 'translate(50%, -310%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
          Message envoyé!
        </div>
        </Popup>
      </form> 
      
      <div className="formBorder" >
        <div>
          <img src={burgerImage} alt=""/>
        </div>
      </div>
    </div>  );
};

export default Contact;
