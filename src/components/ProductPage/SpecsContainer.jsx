import React from "react";

import Spec from "./Spec";
import s from "../../styles/ProductPage/SpecsContainer.module.css";

const SpecsContainer = ({
    variant,
    specs = [],
    selectedSpec,
    onSelectSpec,
}) => {
    console.log("specs recebido no SpecsContainer:", specs);
    console.log("selectedSpec recebido no SpecsContainer:", selectedSpec);

    return (
        <div className={s.specsContainer}>
            {specs.map((spec) => (
                <Spec
                    size={spec.value}
                    key={spec.value || spec.color}
                    color={spec.color}
                    selected={
                        selectedSpec === spec.value ||
                        selectedSpec === spec.color
                    }
                    onSelectSpec={() => onSelectSpec(spec.value || spec.color)}
                />
            ))}
        </div>
    );
};

export default SpecsContainer;
