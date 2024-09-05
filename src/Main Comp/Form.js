import React, { useState } from "react";

function Form() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [inmouse, setMouse] = useState(false)

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text !== "") {
      list.push(text);
      setList(list);
      setText("");
    }
  };

  const handlePop = () => {
    if (list.length !== 0) {
      const updatedList = [...list];
      updatedList.pop();
      setList(updatedList);
    }
  };

  const handleMouseOver = () => {
    setMouse(true)
  };

  const handleMouseOut = () => {
    setMouse(false)
  };
  
  return (
    <div>
      <form className="feedback" onSubmit={handleSubmit}>
        <input
          className="tbox"
          type="text"
          value={text}
          placeholder="Enter text"
          onChange={handleChange}/>

        <div className="submit">

          <button className="button" type="submit" 
          style={{backgroundColor: inmouse ? "#363062" : "#6a9c89", color: inmouse ? "white" : "#213555", border:"1px solid white"}}
          onClick={handleSubmit}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
            Submit
          </button>

          <button className="button" 
          style={{backgroundColor: inmouse ? "#363062" : "#6a9c89", color: inmouse ? "white" : "#213555", border:"1px solid white"}}
          onClick={handlePop}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
            Remove
          </button>

        </div>
      </form>

      <div className="list">
        <ul className="text">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Form;
