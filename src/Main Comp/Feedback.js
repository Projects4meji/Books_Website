import React, { useState } from "react";

function Feedback(){
    
    const [submit, setSubmit] = useState("");
    const [inmouse, setInMouse] = useState(false);

    const handleChange = (e) => {
        setSubmit(e.target.value);
    }

    const handleFeedback = (e) => {
        e.preventDefault();
        if(submit.trim() === ""){
            setSubmit("please give your feedback.");
        }else if(submit.trim() !== ""){
            setSubmit("We will get back to you shortly.");
        }else{
            setSubmit("we are having an issue at the moment.")
        }
    };

    const handleMouseOver = () => {
        setInMouse(true)
      };
    
      const handleMouseOut = () => {
        setInMouse(false)
      };

    return(
        <div className="container form">
            <form onSubmit={handleFeedback}>
                <div className="mb-3" style={{height:"550px"}}>
                    <h2 className="display-4 fw-normal text-body-emphasis">Feedback</h2>
                    <div className="container" style={{marginTop:"50px"}}>
                        <div className="label">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <label htmlFor="exampleFormControlInput2" className="form-label">Name</label>
                        </div>
                        <div className="label">
                            <input 
                                style={{backgroundColor:"aliceblue",textAlign:"center"}}
                                type="email" 
                                className="form-control textarea" 
                                id="exampleFormControlInput1" 
                                placeholder="name@example.com"/>

                            <input 
                                style={{backgroundColor:"aliceblue",textAlign:"center"}}
                                type="text" 
                                className="form-control textarea" 
                                id="exampleFormControlInput1" 
                                placeholder="Enter your name"/>
                        </div>
                        <div style={{backgroundColor:"#f6f6f6"}}>
                            <div className="textsubmit" style={{margin:"0px 70px 0px 70px"}}>
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                    <textarea 
                                        value={submit}
                                        onChange={handleChange}
                                        className="form-control" 
                                        id="exampleFormControlTextarea1" 
                                        rows="3"                                     
                                        style={{height:"270px",backgroundColor:"aliceblue"}}>
                                    </textarea>
                                <button 
                                    onClick={handleFeedback}
                                    className="button"
                                    style={{backgroundColor:inmouse ? "#213555" : "#FCF5ED", marginTop:"10px", color:inmouse ? "white" : "#213555"}}
                                    onMouseOver={handleMouseOver}
                                    onMouseOut={handleMouseOut}
                                    type="submit">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div> 
                </div>
            </form>
            <span>{submit}</span>
        </div>
    );
}
export default Feedback;