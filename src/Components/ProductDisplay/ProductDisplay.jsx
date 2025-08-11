import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product.id);
        }
    };

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="product-image">
                    <img src={product.image} alt={product.name} />
                </div>
            </div>
            <div className="productdisplay-right">
                <div className="product-category">MODE</div>
                <h1 className="product-title">{product.name}</h1>
                
                <div className="product-rating">
                    <div className="stars">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                    </div>
                    <span className="rating-text">(4.6/5)</span>
                </div>

                <div className="product-price">
                    <span className="current-price">{product.new_price} €</span>
                </div>

                <div className="product-section">
                    <h3>Description</h3>
                    <p className="product-description">
                        Chaussures de running haute performance avec technologie Boost.
                    </p>
                </div>

                <div className="stock-info">
                    <span className="stock-badge">En stock (20 disponibles)</span>
                </div>

                <div className="quantity-section">
                    <label>Quantité:</label>
                    <div className="quantity-controls">
                        <button 
                            className="quantity-btn" 
                            onClick={decreaseQuantity}
                            disabled={quantity <= 1}
                        >
                            -
                        </button>
                        <span className="quantity-display">{quantity}</span>
                        <button className="quantity-btn" onClick={increaseQuantity}>
                            +
                        </button>
                    </div>
                </div>

                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    🛒 Ajouter au panier ({product.new_price * quantity} €)
                </button>

                <div className="product-features">
                    <h3>Caractéristiques</h3>
                    <div className="features-list">
                        <div className="feature-item">
                            <span className="checkmark">✓</span>
                            <span>Livraison gratuite dès 50€</span>
                        </div>
                        <div className="feature-item">
                            <span className="checkmark">✓</span>
                            <span>Retour gratuit sous 30 jours</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
