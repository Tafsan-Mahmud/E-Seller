import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillBagFill } from "react-icons/bs";

const Navbar = () => {
    const { totalQuantities } = useSelector(state => state.CartReducer)
    return (
        <div id="navbar-cstm">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <Link to="/"><img className="navbar-brand nav-img" src="/images/logo.webp" alt="logo" /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Features</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/cart">Order Review</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/cart">
                                    <div className="basket">
                                        <BsFillBagFill className="cart-icon" />
                                        <span>{totalQuantities}</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;