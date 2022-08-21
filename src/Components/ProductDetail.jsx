import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const ProductDetail = () => {
    const { productID } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        (async () => {
            const API_URL = `https://dummyjson.com/products/${productID}`;
            const productResponse = await fetch(API_URL).then(response => response.json());
            setProduct(productResponse);
        })();
    }, [productID]);

    return (
        <>
            <h2>Detalle del producto</h2>
            {
                product && (
                    <div>
                        <h3>{product.title}</h3>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            style={{
                                width: "200px",
                                marginBottom: "10px"
                            }}
                        />
                        <p>{product.description}</p>
                        <p>Brand: {product.brand}</p>
                        <p>Price: {product.price}</p>
                        <p>Discount: {product.discountPercentage}</p>
                        <Link to="/products">[volver]</Link>
                    </div>

                )}
        </>
    )
}