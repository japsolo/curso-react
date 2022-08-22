import { useSelector, useDispatch } from "react-redux";

import { removeProductFromCart } from "../Reducers/cartSlice";

export const Cart = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.cart);

    const removeProductHandler = (id) => dispatch(removeProductFromCart(id));
    return (
        <>
            <h3>Cart</h3>
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <hr />
                        <img src={product.thumbnail} alt={product.title} style={{ width: "50px" }} />
                        <span>{product.title}</span>
                        <button className="btn btn-danger" onClick={() => removeProductHandler(product.id)}>Remover del carrito</button>
                    </div>
                )
            })}
        </>
    )
}