import React from "react";
import sports from "../images/cat-sports.jpeg"
function Categories(props){
    return(
        <div className="card">
            <img src={props.image_link} className="card-img-top img-category" alt="nft"/>
            <div className="card-body text-center">
                <div>
                    <p className="fs-4 fw-bold">{props.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Categories;