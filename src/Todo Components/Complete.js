import React, { useContext } from "react";
import {ToDoContext} from "../context/context";

function Complete() {
    const { isList } = useContext(ToDoContext);

    return (
        <div>
            <div className="headings">
                <p>Completed</p>
            </div>
            <div className="lists">
                <ul style={{position:"absolute", textAlign:"center", left:"50%",backgroundColor:"#9AD0C2",borderRadius:"20px",padding: "12px",color: "gray",listStyleType: "none",fontWeight:"bold"}}>
                    {isList.filter(item => item.status === 'Completed').map((item) => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Complete;