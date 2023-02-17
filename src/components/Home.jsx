import React from "react";
import Navbar from "../components/Navbar";
import Row from '../components/ProductRow';
import Footer from "../components/Footer"
import CategoriesRow from '../components/CategoriesRow';

function Home(){
    return(
        <div>
      {/* <p>Hellow</p> */}
      <Navbar/>
      <div className='m-4'>
        <div className='ms-2 my-3'>
          <h2>Trending</h2>
        </div>
        <Row/>
      </div>
      <div className='m-4'>
        <div className='ms-2 my-3'>
          <h2>Category</h2>
        </div>
        <CategoriesRow/>
      </div>
      <Footer/>
    </div>
    )
}

export default Home;