import React from "react";
import s from "../styles/nav.module.css";
import { useState } from "react";

import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router";
import { useLocation } from "react-router";

const nav = () => {
    return (
        <nav>
            <Link to={"/cart"} className={`${s.cart} ${s.btn}`}>
                <MdOutlineShoppingCart fontSize="25px" color="black" />
                <span className={s.cartNumber}>1</span>
            </Link>
            <a className={s.logo}></a>
            <Link className={`${s.search} ${s.btn}`}>
                <IoSearch fontSize="25px" color="white" />
            </Link>
        </nav>
    );
};

export default nav;
