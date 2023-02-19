import React from "react";
import Navbar from "../components/Navbar";
import Product from "./Product";
import Footer from "../components/Footer";

function ProductPage(){
    return(
        <div>
            <Navbar/>
            <Product/> 
            <Footer/> 
        </div>
    )
}

export default ProductPage;