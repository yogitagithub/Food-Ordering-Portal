import React from "react";
import pizzaData from "../pizzadata";
import Pizzacategories from "./pizzacategories";
import "../styles/pizzadetails.css";

const Pizza = ({ cart, setCart }) => {

    const handleClick = (display) => {
        if (cart.indexOf(display) !== -1) return;
        setCart([...cart, display]);
         
        cart.push(display);
        console.log(cart);

        fetch('http://localhost:3001/add-to-cart', {
            method: 'POST',
            body: JSON.stringify({cart}),
            headers: {
                'Content-type': "application/json; charset=UTF-8"
            }
        })
            .then(resp => 
                resp.json()
            )
            .then(dt => {
                alert('Item inserted successfully')
            }
        )
    }

    return (
        <>
            <section className="header">
                {
                    pizzaData.map((display) => (
                        <Pizzacategories key={display.id} display={display} handleClick={handleClick}></Pizzacategories>
                    ))
                }
            </section>
        </>
    );
}
export default Pizza;

    