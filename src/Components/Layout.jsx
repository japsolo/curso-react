import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Layout = () => {
    const { totalCount } = useSelector(state => state.cart);
    return (
        <>
            <div className="container">
                <h2>React Router</h2>
                <p>Productos en carrito: <strong>{totalCount}</strong></p>
                <nav>
                    <hr />
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
                    <hr />
                </nav>

                <Outlet />

                <footer>
                    <hr />
                    <p>Copyright - 2022</p>
                </footer>
            </div>
        </>
    )
}