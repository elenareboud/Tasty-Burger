import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const OrderDetails = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
      fetch(`http://localhost:1234/order/${id}`)
      .then(response => response.json())
      .then(data => setOrderDetails(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  return (
    <div className="orderDetails">
    <main>
      <h1>Détails de la commande</h1>

      <div>
        <h2>Livraison</h2>
        <p>Adresse: rue Bleu</p>
      </div>

      <div>
        <h2>Contact</h2>
        <p>Nom: Stuart</p>
        <p>N° de téléphone: {/* Numéro de téléphone */}</p>
      </div>

      <div>
        <h2>État de la commande</h2>
        <p>État de la commande: Processing</p>
        <p>Déposée: le {/* Date de la commande */}</p>
        <p>Délivrée: le {/* Date de livraison */}</p>
      </div>

      <div>
        <h2>Paiement</h2>
        <p>Mode de paiement: CB</p>
        <p>Référence de paiement: eipsljk</p>
        <p>Payé: le {/* Date de paiement */}</p>
      </div>

      <div>
        <h2>Montant</h2>
        <p>Montant total: {/* Montant total */}</p>
        <p>Frais de livraison: {/* Frais de livraison */}</p>
        <p>TVA: {/* Taxe */}</p>
        <p>Total: {/* Total */}</p>
      </div>

      {/* Ajouter ici les articles commandés comme des éléments <div> ou <article> */}
    </main>
    </div>
);
};
      
export default OrderDetails;
