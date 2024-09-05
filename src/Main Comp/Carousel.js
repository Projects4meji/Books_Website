import React, { useState } from "react";

const carouselStyles ={
    borderRadius: "20px",
    width: "20%",
    marginBottom: "20px"
};

const sectionStyles = {
    backgroundColor: "#F0F0F0",
    marginTop: "45px",
    zIndex: "-1"
};


function Carousel() {

    const [click, setClick] = useState(0);

    const heartStyles = {
        width: 10 + 10 * click
    };

    const handleClick = () => {
        setClick(click + 1)
    };

    return(
    <section id="testimonial" style={sectionStyles}>
            <div className="container" style={{backgroundColor: "#F0F0F0"}}>
                <div className="px-4 pt-5 mt-5 text-center">
                    <p className="display-5 text-body-emphasis" style={{color: "#666666", fontFamily: "'Croissant One', cursive", fontSize: "2em"}}>"Start by doing what’s necessary; then do what’s possible; and suddenly you are doing the impossible."</p>
                    <img className="d-block mx-auto mb-4 mt-5 franci" src="/images/FoA.png" alt=""/>
                    <div onClick={handleClick} className="col-lg-6 mx-auto">
                        <p className="lead mb-5">Francis of Assisi</p>
                    </div>
                </div>
            </div>
            <div className="container" style={{backgroundColor: "#F0F0F0", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "20px", marginBottom: "40px"}}>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{padding: "20px 20px 20px 20px"}}>
                            <img onClick={handleClick} src="./images/david-martos-hyper-scape.jpg" className="d-block w-100" alt="..." style={carouselStyles}/>
                            <img src="./images/heart.svg" alt="heart" style={{width: click? 10 + 10 * click : 10}}/>
                        </div>
                        <div className="carousel-item">
                            <img onClick={handleClick} src="./images/raphael-lacoste-sentier-conte-hd.jpg" className="d-block w-100" alt="..." style={carouselStyles}/>
                            <img src="./images/heart.svg" alt="heart" style={{width: click? 10 + 10 * click : 10}}/>
                        </div>
                        <div className="carousel-item">
                            <img onClick={handleClick} src="./images/raphael-lacoste-bg-game-raph.jpg" className="d-block w-100" alt="..." style={carouselStyles}/>
                            <img src="./images/heart.svg" alt="heart" style={{width: click? 10 + 10 * click : 10}}/>
                        </div>
                        <div className="carousel-item">
                            <img onClick={handleClick} src="./images/Art.jpg" className="d-block w-100" alt="..." style={carouselStyles}/>
                            <img src="./images/heart.svg" alt="heart" style={heartStyles}/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
export default Carousel;