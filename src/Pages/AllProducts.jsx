import React, { useContext } from 'react'
import './CSS/AllProducts.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
import BackButton from '../Components/BackButton/BackButton'

// Page pour afficher tous les produits
const AllProducts = () => {
  const {all_product} = useContext(ShopContext)
  
  return (
    <div className='all-products'>
      <BackButton />
      <div className="all-products-header">
        <h1>Tous nos produits</h1>
        <p>Découvrez notre collection complète</p>
      </div>
      
      <div className="all-products-indexSort">
        <p>
          <span>Affichage de tous les produits</span> ({all_product.length} produits)
        </p>
      </div>
      
      <div className="all-products-grid">
        {all_product.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default AllProducts
