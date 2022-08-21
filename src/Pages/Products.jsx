import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { ProductsList } from "../Components/ProductsList";
import { ProductDetail } from "../Components/ProductDetail";

export const Products = () => {
    const [productsState, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const API_URL = "https://dummyjson.com/products";
            const productsResponse = await fetch(API_URL).then(response => response.json());
            setProducts(productsResponse.products);
        })();
    }, []);

    return (
        <>
            <Routes>
                <Route
                    index
                    element={<ProductsList products={productsState} />}
                />
                <Route path=":productID" element={<ProductDetail />} />
            </Routes>
        </>
    )
}