import React, { useState } from "react";
// import {BooksContext, Provider } from "../context/BooksContext";

function BookCreate({onCreate}){
    const [title, setTitle] = useState("");

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(title);
        setTitle("");
    }

    return(
        <div style={{display:"flex", alignItems:"flex-end", justifyContent:"center"}}>
            <div className="create">
                <h1 className="h1 mb-3 fw-normal" style={{marginLeft:"20px", color:"black", fontFamily:"fantasy"}}>Add a Book</h1>
                <div className="form-floating" style={{marginLeft:"39%", width:"80%", textAlign:"center"}}>
                    <form onSubmit={handleSubmit} style={{width:"30%"}}>
                        <label htmlFor="floatingInput" style={{fontSize:"22px", fontWeight:"bold", color:"black"}}>Title</label>
                        <input className="form-control" value={title} onChange={handleChange} style={{margin:"5px 20px", width:"85%", height:"50px", fontSize:"15px"}}/>
                        <button className="btn btn-primary" style={{marginBottom:"10px"}}>Create!</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BookCreate;