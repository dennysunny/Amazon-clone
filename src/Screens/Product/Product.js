import React from "react";
import "../Product/Product.css";
import {useStateValue } from '../../StateProvider'

function Product({ id, title, image, price, rating }) {

  const [{basket} ,dispatch] = useStateValue()

  const addToBasket = () => {
      dispatch({
        type : 'ADD_TO_BASKET',
        item : {
          id : id,
          title : title,
          image : image,
          price : price,
          rating : rating
        }
      })
  }

  return (
    <div className="product">

      <div className="card">
        <p>{title}</p>

        <p className="price">
          <strong> {price} </strong>
          <small> ₹ </small>
        </p>

        <div className="rating">
          {Array(rating)
            .fill()
            .map(() => (
              <span> 🙂 </span>
            ))}
        </div>
      </div>
      <img  src={image} alt="product" />
      <button onClick = {addToBasket} >Add To Cart</button>

    </div>
  );
}

export default Product;
