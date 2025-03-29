import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

import api from "../../services/api";

const Forms = () => {
    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        image: "",
        sizes: [],
        colors: [],
    });

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

    const submitProduct = async (e) => {
        const response = await api.post("/products", product);
        console.log(response.data);
    };

    const handleCheckbox = (e, type) => {
        const { name, checked } = e.target;
        switch (type) {
            case "sizes":
                if (checked) {
                    setProduct({
                        ...product,
                        sizes: [...product.sizes, name],
                    });
                } else {
                    setProduct({
                        ...product,
                        sizes: product.sizes.filter((size) => size !== name),
                    });
                }
                break;
            case "colors":
                if (checked) {
                    setProduct({
                        ...product,
                        colors: [...product.colors, name],
                    });
                } else {
                    setProduct({
                        ...product,
                        colors: product.colors.filter(
                            (color) => color !== name
                        ),
                    });
                }
        }
    };

    useEffect(() => {
        console.log(product.colors, product.sizes, product.category);
    }, [product]);

    useEffect(() => {
        getCategories();
    }, []);
    return (
        <Form>
            <Row className="mb-3" data-bs-theme="dark">
                <Form.Label htmlFor="inputGroupSelect01">
                    Nome do Produto
                </Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control
                        required
                        aria-label="Text input with dropdown button"
                        placeholder="Nome do Produto (Camiseta - Nome do produto)"
                        onChange={(e) => {
                            setProduct({
                                ...product,
                                name: e.target.value,
                            });
                        }}
                    />
                </InputGroup>

                <InputGroup>
                    <InputGroup.Text>R$</InputGroup.Text>

                    <Form.Control
                        required
                        aria-label="Dollar amount (with dot and two decimal places)"
                        placeholder="Preço"
                        onChange={(e) => {
                            setProduct({
                                ...product,
                                price: e.target.value,
                            });
                        }}
                    />
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                <InputGroup>
                    <Form.Control
                        required
                        aria-label="Dollar amount (with dot and two decimal places)"
                        placeholder="URL da Imagem"
                        onChange={(e) => {
                            setProduct({
                                ...product,
                                image: e.target.value,
                            });
                        }}
                    />
                </InputGroup>
            </Row>
            <Form.Select
                aria-label="Categoria"
                data-bs-theme="dark"
                onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                }
            >
                <option>Categoria</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.title}
                    </option>
                ))}
            </Form.Select>

            {["checkbox"].map((type) => (
                <div key={`inline-${type}`} className="mb-3" required>
                    <Form.Check
                        inline
                        label="PP"
                        name="pp"
                        type={type}
                        id={`inline-${type}-1`}
                        onChange={(e) => {
                            handleCheckbox(e, "sizes");
                        }}
                    />
                    <Form.Check
                        inline
                        label="P"
                        name="p"
                        type={type}
                        id={`inline-${type}-2`}
                        onChange={(e) => {
                            handleCheckbox(e, "sizes");
                        }}
                    />
                    <Form.Check
                        inline
                        label="M"
                        name="m"
                        type={type}
                        id={`inline-${type}-2`}
                        onChange={(e) => {
                            handleCheckbox(e, "sizes");
                        }}
                    />
                    <Form.Check
                        inline
                        label="G"
                        name="g"
                        type={type}
                        id={`inline-${type}-2`}
                        onChange={(e) => {
                            handleCheckbox(e, "sizes");
                        }}
                    />
                </div>
            ))}

            {["checkbox"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="Preto"
                        name="black"
                        type={type}
                        id={`inline-${type}-1`}
                        onChange={(e) => {
                            handleCheckbox(e, "colors");
                        }}
                    />
                    <Form.Check
                        inline
                        label="Branco"
                        name="white"
                        type={type}
                        id={`inline-${type}-2`}
                        onChange={(e) => {
                            handleCheckbox(e, "colors");
                        }}
                    />
                    <Form.Check
                        inline
                        label="Azul"
                        name="blue"
                        type={type}
                        id={`inline-${type}-2`}
                        onChange={(e) => {
                            handleCheckbox(e, "colors");
                        }}
                    />
                    <Form.Check
                        inline
                        label="Vermelho"
                        name="red"
                        type={type}
                        id={`inline-${type}-2`}
                        onChange={(e) => {
                            handleCheckbox(e, "colors");
                        }}
                    />
                </div>
            ))}

            <Button
                variant="primary"
                type="submit"
                onClick={(e) => {
                    submitProduct();
                    e.preventDefault();
                }}
            >
                Submit
            </Button>
        </Form>
    );
};

export default Forms;
