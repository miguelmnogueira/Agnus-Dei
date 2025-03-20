import React from "react";
import s from "../../styles/ProductPage/Spec.module.css";

const CartSpecs = ({ color, size, isCart }) => {
    return (
        <div
            style={{ backgroundColor: color }}
            className={`${s.spec} ${isCart && s.cartSpec}`}
        >
            <span>{size}</span>
        </div>
    );
};

export default CartSpecs;
