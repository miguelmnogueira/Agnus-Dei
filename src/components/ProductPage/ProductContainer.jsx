import React from "react";
import { useState } from "react";

import s from "../../styles/ProductPage/ProductContainer.module.css";

const ProductContainer = ({ image, home, price }) => {
    const [mouseIn, setMouseIn] = useState(false);
    return (
        <div id={s.productContainer}>
            <div id={s.imgContainer} className={mouseIn && s.imgContainerHover}>
                <img src={mouseIn ? image + "h.png" : image + ".png"} alt="" />
            </div>
            <h3>Camiseta - aI OQ DWAHDNUANM</h3>
            <div id={s.paymentContainer}>
                <div id={s.pricesContainer}>
                    <p id={s.price}>R${price}</p>
                    <span id={s.priceDiscounted}>R${price}</span>
                </div>
                <span id={s.cardInfo}>Ou até 6x no cartão</span>
            </div>
        </div>
    );
};

export default ProductContainer;
