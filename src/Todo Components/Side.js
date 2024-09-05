import React, { useContext } from "react";
import { ToDoContext } from "../context/AppContext";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';


function Side() {
    const {isList, isName, handleAdd, handleCan, handleChange, handleSubmit} = useContext(ToDoContext);

    
    return(
        <div>
            <h1>TO DO App</h1>
            <div className="input">
                <h1>{isList.length} Names have been Added</h1>
                <form onSubmit={handleSubmit}>
                    <input className="field" value={isName} onChange={handleChange} placeholder="Enter Name"/>
                    <button className="field">Submit</button>
                </form>
            </div>
            <div className="container">
                <div className="flex flex-col">
                    <p className="flex">Pending</p>
                    <p className="flex">Completed</p>
                    <p className="flex">Cancelled</p>
                </div>
            </div>
            <div className="lists">
                <ul style={{position: "absolute", left:"19%",backgroundColor:"#9AD0C2",borderRadius:"20px",padding: "12px",color: "gray",listStyleType: "none",fontWeight:"bold"}}>
                    {isList.filter(item => !item.status).map((item) => (
                    <li key={item.id}>{item.name}
                        <button onClick={() => handleAdd(item.id)}><CheckIcon /></button>
                        <button onClick={() => handleCan(item.id)}><CloseIcon /></button>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="lists">
                <ul style={{position:"absolute", left:"50%",backgroundColor:"#9AD0C2",borderRadius:"20px",padding: "12px",color: "gray",listStyleType: "none",fontWeight:"bold"}}>
                    {isList.filter(item => item.status === 'Completed').map((item) => (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="lists">
                <ul style={{position: "absolute",left: "81%",backgroundColor:"#9AD0C2",borderRadius:"20px",padding: "12px",color: "gray",listStyleType: "none",fontWeight:"bold"}}>
                    {isList.filter(item => item.status === 'Cancelled').map((item) => (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    );
}

export default Side;