import React from 'react';

const Pizzacategories = ({ display, handleClick }) => {
    const {id, title, price, info1, info2, info3, info4, img} = display;
        
    return (
        
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""></img>
            </div>

            <div>
                <p className="product-title">{title}</p>
                <p className="product-price">Rs {price}</p>
            </div>

            <div className="product-info">
                <p>{info1}</p>
                <p>{info2}</p>
                <p>{info3}</p>
                <p>{info4}</p>
            </div>

            <div>
                <button className="product-button" onClick={() => handleClick(display)}>
                    Order Now
                </button>
            </div>
        </div> 
    );
}
export default Pizzacategories;