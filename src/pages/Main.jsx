import React, { useEffect } from "react";
import Category from "../components/Main/Category";
import s from "../styles/Main/Main.module.css";
import api from "../services/api";
import { useState } from "react";

const Main = () => {
    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        try {
            const response = await api.get("/categories");
            const res = response.data;
            console.log(res.data);
            setCategories(res.data);
            if (res.error) {
                alert(res.message);
                return false;
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);
    return (
        <main>
            <div id={s.categoryContainer}>
                {categories.map((category) => (
                    <Category title={category.title} />
                ))}
            </div>
        </main>
    );
};

export default Main;
