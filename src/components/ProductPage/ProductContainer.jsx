import React from "react";
import { useState } from "react";
import { FaEye } from "react-icons/fa";

import s from "../../styles/ProductPage/ProductContainer.module.css";

const ProductContainer = ({ image }) => {
    const [mouseIn, setMouseIn] = useState(false);
    return (
        <div id={s.productContainer}>
            <div id={s.imgContainer} className={mouseIn && s.imgContainerHover}>
                <FaEye
                    color={!mouseIn ? "white" : "black"}
                    id={s.eyeButton}
                    fontSize="32px"
                    className={mouseIn && s.selected}
                    onClick={() => setMouseIn(!mouseIn)}
                />

                <img src={mouseIn ? image + "h.png" : image + ".png"} alt="" />
            </div>
            <h3>Camiseta - aI OQ </h3>
            <div id={s.paymentContainer}>
                <div id={s.pricesContainer}>
                    <p id={s.price}>R$100,00</p>
                    <span id={s.priceDiscounted}>R$159,000</span>
                </div>
                <span id={s.cardInfo}>Ou até 6x no cartão</span>
            </div>
        </div>
    );
};

export default ProductContainer;
