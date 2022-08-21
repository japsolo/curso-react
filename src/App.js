import { Route, Routes } from "react-router-dom";

import { Layout } from "./Components/Layout";

import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { Products } from "./Pages/Products";
import { NotFound } from "./Pages/NotFound";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about-us" element={<AboutUs />} />
                    <Route path="products/*" element={<Products />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
