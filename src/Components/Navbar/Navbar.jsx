import React, { useContext } from 'react'
import { useRef } from 'react'
import './Navbar.css'
import './ContactModal.css'
import { useState } from 'react'
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart_icon.png'

import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/dropdown_icon.png'

const ContactModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={e => e.stopPropagation()}>
        <h2>Nos renseignements</h2>
        <ul>
          <li><strong>Téléphone :</strong> +212 6 12 34 56 78</li>
          <li><strong>Email :</strong> contact@sitemountaga.com</li>
          <li><strong>Adresse :</strong> 123, Avenue de l'Exemple, Casablanca, Maroc</li>
        </ul>
        <button onClick={onClose} className="close-modal-btn">Fermer</button>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [menu, setMenu] = useState("accueil");
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle =  (e) =>{
         menuRef.current.classList.toggle('nav-menu-visible');
         e.target.classList.toggle('open');
  }
  return (
    <>
      <div className='navbar'>
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>M&A</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
          <li onClick={() => setMenu("accueil")}> <Link style={{ textDecoration: 'none' }} to="/">Acceuil</Link>  {menu === "accueil" ? <hr /> : <></>} </li>
          <li onClick={() => setMenu("homme")}> <Link style={{ textDecoration: 'none' }} to="/homme"> Homme</Link> {menu === "homme" ? <hr /> : <></>} </li>
          <li onClick={() => setMenu("femme")}> <Link style={{ textDecoration: 'none' }} to="/femme">Femme</Link>  {menu === "femme" ? <hr /> : <></>} </li>
          <li onClick={() => setMenu("enfants")}> <Link style={{ textDecoration: 'none' }} to="/enfants">Enfants</Link>   {menu === "enfants" ? <hr /> : <></>} </li>
          <li onClick={() => setMenu("couples")}> <Link style={{ textDecoration: 'none' }} to="/couples"> Couples </Link> {menu === "couples" ? <hr /> : <></>} </li>
          <li onClick={() => { setMenu("contact"); setContactModalOpen(true); }}>
            <span style={{ textDecoration: 'none', cursor: 'pointer', color: 'inherit' }}>Contact</span> {menu === "contact" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()} </div>
        </div>
      </div>
      <ContactModal open={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
}

export default Navbar
