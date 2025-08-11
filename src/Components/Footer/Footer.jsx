import React from 'react';
import './Footer.css';

import logo from '../Assets/logo.jpg'
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">

          {/* Bloc Marque */}
          <div className="footer-brand">
            <img src={logo} alt="Logo Mo-Confort" className="footer-logo" />
            <h3 className="footer-title">M&A</h3>
            <p className="footer-description">
              Votre spécialiste du prêt-à-porter de qualité pour toute la famille —
              le style qui fait la différence, saison après saison.
            </p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/mo_confort?igsh=NHdiYnNkeXhtcWdy" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
                <img src={instagram_icon} alt="Instagram" />
              </a>
              <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="social-icon">
                <img src={pinterest_icon} alt="Pinterest" />
              </a>
              <a href="https://wa.me/224612126851" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon">
                <img src={whatsapp_icon} alt="WhatsApp" />
              </a>
            </div>
          </div>

          {/* Bloc Navigation */}
          <div className="footer-links">
            <h4 className="footer-subtitle">Navigation</h4>
            <ul className="footer-nav-list">
              <li><Link to="/" className="footer-link">Accueil</Link></li>
              <li><Link to="/homme" className="footer-link">Homme</Link></li>
              <li><Link to="/femme" className="footer-link">Femme</Link></li>
              <li><Link to="/enfants" className="footer-link">Enfant</Link></li>
              <li><Link to="/couples" className="footer-link">Couple</Link></li>
            </ul>
            <div className="footer-actions">
              <Link to="/login">
                <button className="login-button">Connexion</button>
              </Link>
              
            </div>
          </div>

          {/* Bloc Contact */}
          <div className="footer-contact">
            <h4 className="footer-subtitle">Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <strong>Email :</strong> 
                <a href="mailto:mapudeurexquise@gmail.com"> mapudeurexquise@gmail.com</a>
              </li>
              <li>
                <strong>Téléphone :</strong>
                <a href="tel:+33751312626"> +33 7 51 31 26 26</a> / 
                <a href="tel:+33753312933"> +33 7 53 31 29 33</a>
              </li>
              <li>
                <strong>Paiement :</strong>
                <p>Sur commande uniquement.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Pied de page */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} M&A. Tous droits réservés.</p>
          <ul className="footer-legal">
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Conditions générales</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
