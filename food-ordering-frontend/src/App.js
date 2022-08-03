import React from 'react';
import { useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Cart from "./components/cart";
import Details from "./components/details";
import Pizza from "./components/pizzadetails";
import Burger from "./components/burgerdetails";
import './App.css';

function App() {

    const[cart, setCart] = useState([]);
    
    return (
        <div>
            <BrowserRouter>

                <div>
                    <nav className="navbar">
                        <div className="navbar-sub">

                            <span className="navbar-food">
                                <Link to="/">
                                    Food Ordering App
                                </Link>
                            </span>

                        <div className="navbar-cursor">

                            <span className="navbar-icon">
                                <Link to="/cart">
                                    <i class="fas fa-cart-plus"></i>
                                </Link>
                            </span>
                            <span className="navbar-length">{cart.length}</span>  
                        
                        </div>

                    </div>
                </nav>
                </div>

                <div>
                    <Switch>

                        <Route path = "/" exact component={Details}></Route>
                            
                        <Route path = "/cart" exact>
                            <Cart cart={cart} setCart={setCart} />
                        </Route>

                        <Route path = "/pizza" exact>
                            <Pizza cart={cart} setCart={setCart} />
                        </Route>

                        <Route path = "/burger" exact>
                            <Burger cart={cart} setCart={setCart} />
                        </Route>

                    </Switch>
                </div>

            </BrowserRouter>
        </div>
    );
}
export default App;
