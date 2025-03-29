import React from "react";
import s from "../styles/ProductPage/ProductPage.module.css";
import { useState } from "react";

import ProductContainer from "../components/ProductPage/ProductContainer";
import SpecsContainer from "../components/ProductPage/SpecsContainer";
import OptionsContainer from "../components/ProductPage/OptionsContainer";
import AmountController from "../components/AmountController";
import Nav from "../components/Nav";

const ProductPage = () => {
    const [selectedSize, setSelectedSize] = useState("PP");
    const [selectedColor, setSelectedColor] = useState("white");
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    return (
        <div id={s.productPage}>
            <ProductContainer image={"1"} price={99.99} />
            <div id={s.productInfo}>
                <div id={s.specsContainer}>
                    <SpecsContainer
                        specs={[
                            { value: "PP" },
                            { value: "P" },
                            { value: "M" },
                            { value: "G" },
                        ]}
                        selectedSpec={selectedSize}
                        onSelectSpec={setSelectedSize}
                    />
                    <SpecsContainer
                        specs={[{ color: "black" }, { color: "white" }]}
                        selectedSpec={selectedColor}
                        onSelectSpec={setSelectedColor}
                    />
                </div>
                <div id={s.bottomOptions}>
                    <AmountController
                        setSelectedQuantity={setSelectedQuantity}
                        selectedQuantity={selectedQuantity}
                    />
                    <OptionsContainer />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
