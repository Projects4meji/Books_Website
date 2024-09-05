import React from "react";

const date = new Date();
const currentTime = date.getHours();
let greet;

const customStyles = {
  color: ""
};


if (currentTime < 12) {
  greet = "Good Morning";
  customStyles.color = "#C1D8C3";
} else if (currentTime < 18) {
  greet = "Good Afternoon";
  customStyles.color = "#CE5A67";
} else {
  greet = "Good Night";
  customStyles.color = "#3D30A2";
}

function Heading() {
  return (
        <h1 className="heading" style={customStyles}>
        {greet}</h1>
  );
}

export default Heading;
