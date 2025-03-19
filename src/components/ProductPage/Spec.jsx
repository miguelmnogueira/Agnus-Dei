import React from "react";
import s from "../../styles/ProductPage/Spec.module.css";

const Spec = ({ size, color, selected, onSelectSpec }) => {
    return (
        <div
            style={{ backgroundColor: color }}
            className={`${s.spec} ${selected && s.selected}`}
            onClick={onSelectSpec}
        >
            {selected && color && <span id={s.selector}></span>}
            <span>{size}</span>
        </div>
    );
};

export default Spec;
