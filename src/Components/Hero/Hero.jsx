import React, { useState, useEffect } from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import { Link } from 'react-router-dom'
import hero_image from '../Assets/hero_image.jpg'
import product_1 from '../Assets/product_1.jpg'
import product_2 from '../Assets/product_2.jpg'
import product_3 from '../Assets/product_3.jpg'
import product_4 from '../Assets/product_4.jpg'
import exclusive_image from '../Assets/exclusive_image.png'

//La premiere session de notre page dacceuil
const Hero = () => {
  // Array d'images pour le carousel
  const heroImages = [
    hero_image,
    product_1,
    product_2,
    product_3,
    product_4,
    exclusive_image
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effet pour changer l'image automatiquement toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 secondes

    // Nettoyer l'interval quand le composant se démonte
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className='hero'>
        <div className="hero-left">
            <h2><span>BIENVENUE CHEZ M&A</span></h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Découvrez notre collection élégante de vêtements pour homme, femme et enfant — des pièces de qualité supérieure conçues pour allier style, confort et durabilité. Habillez toute la famille avec raffinement, pour chaque moment du quotidien comme pour les grandes occasions.</p>
                
            </div>
            <Link to="/all-products" className=" btn-primary">
              Découvrir nos produits
            </Link>

        </div>
        <div className="hero-right">
            <img 
              src={heroImages[currentImageIndex]} 
              alt={`Hero image ${currentImageIndex + 1}`}
              className="hero-carousel-image"
            />
            <div className="carousel-indicators">
              {heroImages.map((_, index) => (
                <div 
                  key={index}
                  className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
        </div>
      
    </div>
  )
}

export default Hero
