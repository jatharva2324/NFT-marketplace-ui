import React from "react";
import Card from "./ProductCard";

function Row(){
    return(
        <div className="row">
            <div className="col-2">
                <Card price="200ETH" image_link="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000"/>
            </div>
            <div className="col-2">
                <Card price="20.5ETH" image_link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4NPu__x731dgnjLLmeLfHXGllv5srAEPnvRcQikFXLm6oyBHwSXH0RQtwjFnIBjlTVcc&usqp=CAU"/>
            </div>
            <div className="col-2">
                <Card price="30.10ETH" image_link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAqiwTgQ8HxiaGAa43dgZ-nbCXHLdtOJywjCeodc663pcGYGAp-Q_RW8e9Kzf8SMP7x3s&usqp=CAU"/>
            </div>
            <div className="col-2">
                <Card price="400ETH" image_link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLveLVD-nNoGpwfhTuLszqxxc8kYOnO4sGaQ&usqp=CAU"/>
            </div>
            <div className="col-2">
                <Card price="58.0ETH" image_link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8I_rUu8kWudwD77UyezCWmwyD1Hm1h1Ac9edc4ihCcB4FHKYf-KrzR7BKNzxt-dnbmZc&usqp=CAU"/>
            </div>
            <div className="col-2">
                <Card price="0.20ETH" image_link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBNoNhCa9YZSK_c1z3jcKQagEL3U7dukf8Ww&usqp=CAU"/>
            </div>
        </div>
    )
}

export default Row;