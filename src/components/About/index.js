import React from "react";
import ArticleComponent from "./ArticleComponent";
import cuisinierImage from "../../assets/cuisinier.png";
import platImage from "../../assets/beef.jpg";

const About = () => {
  return (
      <section className="about-container">
      <h1>Tasty burger 
        <span> de Julien Moreau</span>
      </h1>
        <ArticleComponent 
        title="Metier et passion"
        text="Julien Moreau a grandi dans une petite ville au cœur de la France, où les marchés de producteurs et la cuisine faite maison étaient une partie essentielle de la vie quotidienne. C'est dans la cuisine de sa grand-mère, où il passait des heures à l'aider à préparer des repas familiaux, que sa passion pour la cuisine a commencé à s'épanouir."
        imgSrc={cuisinierImage}
        />
        <ArticleComponent 
        title="Philosophie culinaire"
        text={
          <>
            La philosophie culinaire de Julien Moreau repose sur trois piliers :
            <ul>
              <li>Utiliser uniquement des ingrédients frais...</li>
              <li>Chaque saison apporte ses propres saveurs uniques. Le menu est adapté pour tirer le meilleur parti des produits de saison.</li>
              <li>Privilégier les fournisseurs locaux, garantir la traçabilité et la qualité des ingrédients.</li>
            </ul>
          </>
        }
        imgSrc={platImage}
        />
      </section>
  );
};

export default About;
