import React from "react";
import CartNav from "../components/CartPage/CartNav";
import Product from "../components/CartPage/Product";
import s from "../styles/CartPage/CartPage.module.css";

const Cart = () => {
    return (
        <>
            <div id={s.cartPage}>
                <h2>Cart</h2>
                <div id={s.productContainer}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
            <CartNav />
        </>
    );
};

export default Cart;
