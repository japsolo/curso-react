import { Link } from "react-router-dom";

export const ProductsList = ({ products = [] }) => {
    return (
        <>
            <h2>Products page</h2>
            <ul>
                {products.map(product => {
                    return (
                        <li key={product.id}>
                            <h4>{product.title}</h4>

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
                            <hr />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}