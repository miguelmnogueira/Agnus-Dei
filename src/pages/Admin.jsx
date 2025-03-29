import React from "react";
import Forms from "../components/Admin/Form";
import TableProduct from "../components/Admin/Table";
import s from "../styles/Admin/Admin.module.css";

const Admin = () => {
    return (
        <div id={s.admin}>
            <Forms />
            <TableProduct />
        </div>
    );
};

export default Admin;
