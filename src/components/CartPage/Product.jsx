import React from "react";
import s from "../../styles/CartPage/Product.module.css";
import AmountController from "../AmountController";
import CartSpecs from "./CartSpecs";

const Product = () => {
    const [selectedQuantity, setSelectedQuantity] = React.useState(1);
    return (
        <div className={s.product}>
            <img src="1.png" alt="" />
            <div className={s.productInfo}>
                <div className={s.productNamePrice}>
                    <h5>Camiseta - alguma coisa</h5>
                    <p>
                        R$<span>149,99</span>
                    </p>
                </div>
                <div className={s.productSpecsQtd}>
                    <div className={s.productSpecs}>
                        <CartSpecs color="white" isCart={true} />
                        <CartSpecs size="PP" isCart={true} />
                    </div>
                    <AmountController
                        selectedQuantity={selectedQuantity}
                        setSelectedQuantity={setSelectedQuantity}
                        isCart={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default Product;
