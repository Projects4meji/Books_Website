import React from "react";

function Links(props){
    return(
        <div className="box col-md-6 col-sm-12 gradient-background">
                <div className="icon">
                    <a href={props.link}>
                    <img className="img-icon" src={props.img} alt="desktop icon"/>
                    <h3>{props.name}</h3></a>
                </div>
            </div>
    );
}

export default Links;