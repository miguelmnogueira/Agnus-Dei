import React from "react";
import s from "../../styles/ProductPage/ProductPage.module.css";
import { MdOutlineShoppingCart } from "react-icons/md";

const OptionsContainer = () => {
    return (
        <div id={s.optionsContainer}>
            <button id={s.addToCartButton}>
                Add <MdOutlineShoppingCart size={"20px"} color="#000" />
            </button>
        </div>
    );
};

export default OptionsContainer;
