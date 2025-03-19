import React from "react";
import s from "../styles/ProductPage.module.css";

import ProductContainer from "../components/ProductPage/ProductContainer";
import OptionsContainer from "../components/ProductPage/OptionsContainer";
import SpecsContainer from "../components/ProductPage/SpecsContainer";

const ProductPage = () => {
    return (
        <div>
            <ProductContainer />
            <SpecsContainer />
            <OptionsContainer />
        </div>
    );
};

export default ProductPage;
