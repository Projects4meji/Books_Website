import React from "react";
import Heading from "./Main Comp/Heading";
import Form from "./Main Comp/Form";
import Contain from "./Main Comp/Contain";
import Pricing from "./Main Comp/Pricing";
import Footer from "./Main Comp/Footer";
import Carousel from "./Main Comp/Carousel";
import Feedback from "./Main Comp/Feedback";
import Navbar from "./Main Comp/Navbar";

function Home(){
    return(
    <div>
        <Navbar />
        <Heading />
        <Form />
        <Contain />
        <Carousel />
        <Pricing />
        <Feedback />
        <Footer />
    </div>
    );
}

export default Home;