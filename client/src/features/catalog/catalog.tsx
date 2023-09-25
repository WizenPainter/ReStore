import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";


export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => { // This is a side effect
        fetch('http://localhost:5000/api/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, []); // This is the dependency array


    return (
        <>
            <ProductList products={products} />
        </>
    )
}