import React from 'react';
import burgerImage from '../../assets/burger2.png';

const Contact = () => {
  return (
    <div className="contact-container">

      <form>
        <h1>Nous contacter</h1>
        <input type="text" placeholder="Votre nom" />
        <input type="email" placeholder="Votre email" />
        <textarea placeholder="Votre message"></textarea>

        <button type="submit">Envoyer</button>
      </form> 
      
      <div className="formBorder" >
        <div>
          <img src={burgerImage} alt=""/>
        </div>
      </div>
    </div>  );
};

export default Contact;
