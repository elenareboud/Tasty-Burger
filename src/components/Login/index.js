import React, { useState } from 'react';
import "../../styles/components/_login.scss"; 


const LoginPage = () => {
  // État pour suivre si l'utilisateur est en train de s'inscrire ou de se connecter
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [activeButton, setActiveButton] = useState('login'); // 'login' ou 'signup'

  const handleButtonClick = (button) => {
    setIsLoggingIn(button === 'login');
    setActiveButton(button);
  };

  return (
      <div className='login-container'>
      <div className='buttons-container'>
        <button 
          onClick={() => handleButtonClick('login')}
          className={activeButton === 'login' ? 'active-button' : ''}
        >
          S'identifier
        </button>
        <button 
          onClick={() => handleButtonClick('signup')}
          className={activeButton === 'signup' ? 'active-button' : ''}
        >
          S'inscrire
        </button>
      </div>
      
      <div className='form-container'>
      <form>
        <h1>{isLoggingIn ? 'S\'identifier' : 'S\'inscrire'}
        </h1>
        <div>
          <label htmlFor="email">Adresse mail:</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Mot de passe:</label>
          <input type="password" id="password" />
        </div>

        {!isLoggingIn && (
          <div>
            <label htmlFor="confirmPassword">Confirmer le mot de passe:</label>
            <input type="password" id="confirmPassword" />
          </div>
        )}

          
        <button className='button-submit' type="submit">
          {isLoggingIn ? 'Se connecter' : 'S\'inscrire'}
        </button>
      </form>
      </div>
    </div>
  );
};

export default LoginPage;