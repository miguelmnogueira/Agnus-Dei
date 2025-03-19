import React from "react";
import s from "../styles/ProductPage.module.css";
import { useState } from "react";

import ProductContainer from "../components/ProductPage/ProductContainer";
import SpecsContainer from "../components/ProductPage/SpecsContainer";
import OptionsContainer from "../components/ProductPage/OptionsContainer";
import Nav from "../components/Nav";
import SpecsContainer from "../components/ProductPage/SpecsContainer";

const ProductPage = () => {
    const [selectedSize, setSelectedSize] = useState("PP");
    const [selectedColor, setSelectedColor] = useState("white");
    return (
        <div>
            <Nav />
            <ProductContainer />
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
            <OptionsContainer />
        </div>
    );
};

export default ProductPage;
