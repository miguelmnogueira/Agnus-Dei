import React from "react";
import s from "../../styles/Main/Product.module.css";
import { TbShoppingCartPlus } from "react-icons/tb";
import { Link } from "react-router";

const Product = ({ image, price, name }) => {
    return (
        <Link className={s.productContainer} to={"/product"}>
            <div className={s.imgContainer}>
                <img src={"1.png"} />
            </div>
            <h5>Camiseta - MARIA SEILA TESTE </h5>
            <div className={s.bottomInfo}>
                <div className={s.paymentContainer}>
                    <div className={s.pricesContainer}>
                        <span className={s.priceDiscounted}>R${price}</span>
                        <p className={s.price}>R${price}</p>
                    </div>
                    <span className={s.cardInfo}>Ou até 6x no cartão</span>
                </div>
            </div>
        </Link>
    );
};

export default Product;
