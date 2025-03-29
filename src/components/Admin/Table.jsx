import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import api from "../../services/api";
import { useState } from "react";
const TableProduct = () => {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const response = await api.get("/products");
        const res = response.data;
        console.log(res.data);
        if (res.error) {
            alert(res.message);
            return false;
        }
        setProducts(res.data);
    };

    useEffect(() => {
        getProducts();
    }, []);

    const deleteProduct = async (id) => {
        const response = await api.delete(`/products/${id}`);
        const res = response.data;
        if (res.error) {
            alert(res.message);
            return false;
        }
        getProducts();
    };
    return (
        <Table striped bordered hover data-bs-theme="dark">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((p) => (
                    <tr key={p._id}>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                        <td>
                            <button
                                onClick={(e) => {
                                    deleteProduct(p._id);
                                }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default TableProduct;
