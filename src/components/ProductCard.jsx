import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props){
    return(
        <div className="card">
            <img src={props.image_link} className="card-img-top img-card" alt="nft"/>
            <div className="card-body text-center">
                <div>
                    <p className="fs-4 fw-bold">{props.price}</p>
                </div>
                <p className="card-text">Ape NFT</p>
                <Link to="/product">
                    <button className="btn btn-dark">Buy now</button>
                </Link>
            </div>
        </div>
    )
}

export default ProductCard;