import React from "react";
import s from "../styles/nav.module.css";

import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const nav = () => {
    return (
        <nav>
            <button className={`${s.cart} ${s.btn}`}>
                <MdOutlineShoppingCart fontSize="25px" color="black" />
                <span className={s.cartNumber}>1</span>
            </button>
            <a className={s.logo}></a>
            <button className={`${s.search} ${s.btn}`}>
                <IoSearch fontSize="25px" color="white" />
            </button>
        </nav>
    );
};

export default nav;
