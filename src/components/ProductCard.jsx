import React from "react";
import image1 from "../images/image2.jpeg";

function ProductCard(){
    return(
        <div className="card">
            <img src={image1} className="card-img-top" alt="nft-image"/>
            <div className="card-body text-center">
                <div>
                    <p className="fs-4 fw-bold">100ETH</p>
                </div>
                <p className="card-text">Ape NFT</p>
                <button className="btn btn-dark">Buy now</button>
            </div>
        </div>
    )
}

export default ProductCard;