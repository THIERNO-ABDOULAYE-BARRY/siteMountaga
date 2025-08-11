import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = ({ usePreviousPage = false }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (usePreviousPage) {
      e.preventDefault();
      navigate(-1); // Retour à la page précédente
    }
  };

  if (usePreviousPage) {
    return (
      <button className="back-button" onClick={handleClick}>
        <span className="back-icon">←</span>
        Retour
      </button>
    );
  }

  return (
    <Link to="/" className="back-button">
      <span className="back-icon">←</span>
      Retour à l'accueil
    </Link>
  );
};

export default BackButton;
