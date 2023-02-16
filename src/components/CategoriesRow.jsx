import React from "react";
import Categories from "./Categories";

function CategoriesRow(){
    return(
        <div className="row">
            <div className="col-2">
                <Categories name="sports" image_link="../images/cat-sports.jpeg"/>
            </div>
            <div className="col-2">
                <Categories name="Photography"/>
            </div>
            <div className="col-2">
                <Categories name="Video"/>
            </div>
            <div className="col-2">
                <Categories name="Image"/>
            </div>
            <div className="col-2">
                <Categories name="sports"/>
            </div>
            <div className="col-2">
                <Categories name="sports"/>
            </div>
        </div>
    )
}

export default CategoriesRow;