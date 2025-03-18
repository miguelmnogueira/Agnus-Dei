import React from "react";
import s from "../../styles/ProductPage.module.css";
import { MdOutlineShoppingCart } from "react-icons/md";

const OptionsContainer = () => {
    return (
        <div id={s.optionsContainer}>
            <div id={s.amountContainer}>
                <button id={s.plus}>-</button>
                <span>
                    1<span id={s.x}>x</span>
                </span>
                <button id={s.minus}>+</button>
            </div>
            <button id={s.addToCartButton}>
                Add to <MdOutlineShoppingCart size={"20px"} />
            </button>
        </div>
    );
};

export default OptionsContainer;
