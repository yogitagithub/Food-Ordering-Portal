import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart }) => {
     const[price, setPrice] = useState(0);
     
     const handleChange = (display, d) => {
          const ind = cart.indexOf(display);
          const arr = cart;
          arr[ind].amount += d;

          if (arr[ind].amount === 0) arr[ind].amount = 1;
          setCart([...arr]);
     }

     const handleRemove = async (id) => {
          const arr = cart.filter((display) => display.id !== id);
               setCart(arr);
               handlePrice();

               fetch('http://localhost:3001/deleteFood/'+id, 
               {
                    method: 'DELETE',
                    body: JSON.stringify({id}),
                         headers: {
                           'Content-type': "application/json; charset=UTF-8"
                         }
               })
               .then(resp =>
                   resp.json()
               )
               .then(dt => {
                   alert('Item deleted successfully')
               })
          }

     const handlePrice = () => {
        let ans = 0;
        cart.map((display) => (ans += display.amount * display.price));
        setPrice(ans);
     }

     let clear = () => {
         window.location.reload();
     }

     useEffect(() => {
        handlePrice();
     });
    
     return(
          <article className="clutch">
               {cart.map((display) => (
                   <div className="stars" key={display.id}>

                    <div className="display-img">
                         <img src={display.img} alt=""></img>
                    </div>

                    <div className="title">
                         <p>{display.title}</p>
                    </div> 

                    <div className="pillow">

                         <button className="one" onClick={() => handleChange(display, 1)}>
                              +
                         </button>
                         <button className="two">
                              {display.amount}
                         </button>
                         <button className="three" onClick={() => handleChange(display, -1)}>
                              -
                         </button>

                    </div>

                    <div>
                         <span className="price">Rs {display.price}</span>
                         <button className="remove-btn" onClick={() => handleRemove(display.id)}>Remove</button>
                    </div>
               </div>
          ))}

               <div className="total">
                    <span className="price-text">Total Price of your Cart</span>
                    <br></br>
                    <span className="total-price">Rs {price}</span>
               </div>

               <div>
                    <button className="btn" type="clear" onClick={clear}>Place Order</button>
               </div>
          </article>
     );
}
export default Cart;
    