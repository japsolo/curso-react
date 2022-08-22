import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addProductToCart, removeProductFromCart } from "../Reducers/cartSlice";

export const ProductsList = ({ products = [] }) => {
    const dispatch = useDispatch();

    const { products: productsInCart } = useSelector(state => state.cart);

    const addProductHandler = (id) => {
        const productFinded = products.find(oneProduct => oneProduct.id === id);

        if (productsInCart.find(product => product.id === productFinded.id)) {
            dispatch(removeProductFromCart(id));
            return;
        }

        dispatch(addProductToCart(productFinded));
    }
    return (
        <>
            <h2>Products page</h2>
            <ul>
                {products.map(product => {
                    return (
                        <li key={product.id}>
                            <h4>{product.title}</h4>
                            <p>ID: {product.id}</p>
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                style={{
                                    width: "100px",
                                    marginBottom: "10px"
                                }}
                            />
                            <br />
                            <Link
                                to={`/products/${product.id}`}
                                className="btn btn-primary"
                            >Ver detalle</Link>
                            <button
                                className={`btn ${productsInCart.find(pdt => pdt.id === product.id) ? "btn-danger" : "btn-warning"}`}
                                onClick={() => addProductHandler(product.id)}
                            >
                                {productsInCart.find(pdt => pdt.id === product.id) ? "Remover del carrito" : "Agregar al carrito"}
                            </button>
                            <hr />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}