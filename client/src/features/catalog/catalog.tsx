import { error } from "console";
import agents from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";


export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => { // This is a side effect
        agents.Catalog.list()
        .then(products => setProducts(products))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, []); // This is the dependency array

    if (loading) return (
        <LoadingComponent message="Loading Products..."/>
    )

    return (
        <>
            <ProductList products={products} />
        </>
    )
}