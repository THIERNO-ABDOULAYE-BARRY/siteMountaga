import React from 'react'
import './Offers.css'
import { FiShoppingBag, FiTruck, FiShield} from 'react-icons/fi';
//3eme session de note page dacceuil
const Offers = () => {
  return (
    <section className="features-section">
    <div className="container">
          <h2 className="section-title">Pourquoi choisir M&A ?</h2>
          <p className="section-subtitle">
            Nous nous engageons à vous offrir la meilleure expérience d'achat en ligne.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, architecto quibusdam fugiat quas quidem non ipsum, cumque dicta tempora atque officia voluptas voluptatibus soluta id odit vel adipisci a repudiandae.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit veniam, quod perferendis, non dolorum impedit consectetur, illo assumenda similique aliquam exercitationem nemo distinctio placeat sint nostrum officiis nobis beatae obcaecati?
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FiShoppingBag />
              </div>
              <h3>Produits de Qualité</h3>
              <p>Nous sélectionnons soigneusement chaque produit pour garantir la meilleure qualité à nos clients.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FiTruck />
              </div>
              <h3>Livraison Rapide</h3>
              <p>Livraison gratuite en 24-48h pour toutes les commandes supérieures à 50€.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FiShield />
              </div>
              <h3>Paiement Sécurisé</h3>
              <p>Vos données sont protégées grâce à notre système de paiement sécurisé SSL.</p>
            </div>
            
            
          </div>
        </div>
        </section>
  )
}

export default Offers
