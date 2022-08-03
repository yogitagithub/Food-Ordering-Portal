import React from "react";
import burgerData from "../burgerdata";
import Burgercategories from "./burgercategories";
import "../styles/burgerdetails.css";

const Burger = ({ cart, setCart }) => {

    const handleClicked = (display) => {
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
                    burgerData.map((display) => (
                        <Burgercategories key={display.id} display={display} handleClicked={handleClicked}></Burgercategories>
                    ))
                }
            </section>
        </>
    );
}
export default Burger;

    