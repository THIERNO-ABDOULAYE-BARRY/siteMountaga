
import './Item.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';



// Gère les prix et la notation des produits avec les props (image, prix, etc.)
const Item = (props) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className='item'>
      <div className='item-image-container'>
        <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0,0)}>
          <img src={props.image} alt={props.name} />
        </Link>
      </div>
      <p>{props.name}</p>
      <div className="item-bottom">
        <div className="item-prices">
          <div className="item-price-new">
            ${props.new_price}
          </div>
          
        </div>
        <button className="add-to-cart-btn" onClick={() => addToCart(props.id)}>
         
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default Item;
