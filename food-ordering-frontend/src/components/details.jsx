import React from "react";
import data from "../data";
import Categories from "./categories";
import Product from "./product";
import "../styles/details.css";

const Details = () => {
    return (
        <>
            <section className="main">
                {
                    data.map((item) => (
                        <Categories item={item}></Categories>
                    ))
                }
            </section>

            <Product></Product>
        </>
    );
}
export default Details;
