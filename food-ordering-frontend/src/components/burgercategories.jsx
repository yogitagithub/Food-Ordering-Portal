import React from 'react';

const Burgercategories = ({ display, handleClicked }) => {
    const {id, title, price, info1, info2, info3, img} = display;
        
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
            </div>

            <div>
                <button className="product-button" onClick={() => handleClicked(display)}>
                    Order Now
                </button>
            </div>
        </div> 
    );
}
export default Burgercategories;