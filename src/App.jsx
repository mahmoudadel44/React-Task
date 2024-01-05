import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import FilteredProducts from "./pages/FilteredProducts/FilteredProducts";
import ContactUs from "./pages/ContactUs/ContactUs";

// components
import Navbar from "./Components/Navbar";

//Css
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/products/:categoryName/:categoryId"
            element={<FilteredProducts />}
          />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
