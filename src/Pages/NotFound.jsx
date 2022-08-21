import { Link } from "react-router-dom";

import NotFoundImage from "../assets/images/404.webp"

export const NotFound = () => {
    return (
        <>
            <h2>Error 404</h2>
            <img
                src={NotFoundImage}
                style={{ width: "600px" }}
                alt="Not Found"
            />
            <br />
            <Link to="/">Volver al inicio</Link>
        </>
    )
}