import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import SignIn from "./pages/Auth/Signup";
import Payment from "./pages/Payment/Payment";
import Order from "./pages/Order/Order";
import Cart from "./pages/Cart/Cart";
import Result from "./pages/Results/Results"
import ProductDetail from "./pages/ProductDetails/ProductDetails";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/order" element={<Order />} />
        <Route path ="/catagory/:categoryName" element={<Result/>}/>
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;