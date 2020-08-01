import React from 'react'
import {useStateValue } from '../../StateProvider'
import '../Checkout/Checkout.css';

function Checkout() {

    const [ {basket} ] = useStateValue();

    return (
        <div className="checkout">
            <img className="image" 
            src= "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Gaming/ROG-Zephyrus-G14/Mob/Revised/Banner/02_Banner_1500-x-300_Know-More.jpg"
            alt = "ad" />

            {basket?.length ===0 ? (
                <div style = {{margin : "10px"}}>
                    <h2>Your Shopping Cart is Empty</h2>
                    <p>
                        You have no items in your cart. Add items to carts from products page
                    </p>
                </div> ) : (
                    <div>
                        <h2>Your Shopping Cart</h2>
                    </div>
                )}
        </div>
    )
}

export default Checkout
