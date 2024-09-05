import React from "react";
import ImageShow from "./ImageShow";

function ImageList({images}) {
    const renImages = images.map((image) => {
        return <ImageShow key={image.id} image={image}/>
    })
    return(
        <div className="imgVer">
            {renImages}
        </div>
    );
}
export default ImageList;