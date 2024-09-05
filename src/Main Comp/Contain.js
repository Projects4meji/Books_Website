import React from "react"
import Links from "../components/Links";
import containassets from "../assets/containassets";

const containStyles = {
    borderRadius: "20px", 
    backgroundColor: "#F0F0F0"
}

function autoLink(props){
    return(
        <Links 
            key = {props.id}
            link={props.link}
            img={props.imgURL}
            name={props.name}
        />
    );
}


function Contain(){
return (
    <div className="container my-5 back" style={containStyles}>
        <div className="options row ">
            {containassets.map(autoLink)}
        </div>        
    </div>
    );
}

export default Contain;
