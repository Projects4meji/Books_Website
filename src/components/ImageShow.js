import React from "react";

function ImageShow({image}){
    return(
        <div>
            <div className="imgDiv">
                <img className="imgStyles" src={image.urls.small} alt={image.alt_description}/>
            </div>
        </div>
    );
}
export default ImageShow