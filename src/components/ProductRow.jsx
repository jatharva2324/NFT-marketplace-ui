import React from "react";
import Card from "./ProductCard";

function Row(){
    return(
        <div className="row">
            <div className="col-2">
                <Card/>
            </div>
            <div className="col-2">
                <Card/>
            </div>
            <div className="col-2">
                <Card/>
            </div>
            <div className="col-2">
                <Card/>
            </div>
            <div className="col-2">
                <Card/>
            </div>
            <div className="col-2">
                <Card/>
            </div>
        </div>
    )
}

export default Row;