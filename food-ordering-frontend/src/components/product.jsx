import React from 'react';
import "../styles/product.css";
import { Link } from "react-router-dom";

function Product() {
    return(
        <>
            <div className="one">
                <Link to ="/pizza">PIZZA</Link>
            </div>
            
            <div className="two">
                <Link to ="/burger">BURGER</Link>
            </div>
        </>
    );
}
export default Product;
