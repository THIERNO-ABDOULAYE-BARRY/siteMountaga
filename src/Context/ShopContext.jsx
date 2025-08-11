import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';


export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[all_product[index].id] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // Protection anti-double ajout rapide
    let addLock = false;
    const addToCart = (itemId) => {
        if (addLock) return;
        addLock = true;
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
        setTimeout(() => { addLock = false; }, 100);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev };
            if (newCart[itemId] > 1) {
                newCart[itemId] = newCart[itemId] - 1;
            } else {
                newCart[itemId] = 0;
            }
            return newCart;
        });
    }
    // pour calculer le total du panier
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems){
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.new_price * cartItems[item]
            }

        }
        return totalAmount;
    }
     //pour lorquon ajoute un panier ç change en 1 et 2 etc..
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }


    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart
    };
    

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
