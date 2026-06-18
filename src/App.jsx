import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <Navbar cartCount={cartItems.length} />

      <main className="flex-1 pb-20">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/products"
            element={
              <Products addToCart={addToCart} />
            }
          />

          <Route
            path="/product/:id"
            element={
              <ProductDetails addToCart={addToCart} />
            }
          />

          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} />
            }
          />

          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;