// eslint-disable-next-line
import React from "react";
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<ProductPage/>}/>
    </Routes>
  );
}

export default App;
