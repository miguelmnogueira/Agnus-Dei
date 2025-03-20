import React from "react";
import s from "../styles/ProductPage/ProductPage.module.css";

const AmountController = ({
    setSelectedQuantity,
    selectedQuantity,
    isCart,
}) => {
    function handleQuantityChange(value) {
        if (selectedQuantity <= 1 && value === -1) {
            return;
        } else {
            setSelectedQuantity(selectedQuantity + value);
        }
    }
    return (
        <div className={isCart ? s.amountContainerCart : s.amountContainer}>
            <button
                onClick={() => {
                    handleQuantityChange(-1);
                }}
                className={`${s.minus} ${
                    selectedQuantity === 1 ? s.disabled : ""
                }`}
            >
                -
            </button>
            <span>
                {selectedQuantity}
                <span className={s.x}>x</span>
            </span>
            <button
                onClick={() => {
                    handleQuantityChange(1);
                }}
                id={s.plus}
            >
                +
            </button>
        </div>
    );
};

export default AmountController;
