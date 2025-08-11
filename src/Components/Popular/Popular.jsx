import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
//la 2eme session de notre page dacceuil

const Popular = () => {
  return (
    <div className='popular'>
        <h1>Produits Vedettes</h1>
        <hr />
        <div className="popular-item">
            {data_product.map((item, i) => (
                <div  key={i}>
                    <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                </div>
            ))}

        </div>
      
    </div>
  )
}

export default Popular
