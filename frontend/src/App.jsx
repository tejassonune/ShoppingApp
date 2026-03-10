import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collections";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Product";
import Login from "./pages/Product";
import PlaceOrder from "./pages/Product";
import Orders from "./pages/Product";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="px-4 sm:px-[5Vw] md:-[7vW]px lg:px-[7vW]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
