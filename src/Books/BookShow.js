import React, { useState } from "react";
import BookEdit from "./BookEdit";
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function BookShow({book, delBook, onEdit}){
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        delBook(book.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
    }

    let content = <h3>{book.title}</h3>
    if(showEdit){
        content=<BookEdit book={book} onEdit={onEdit} onSubmit={handleSubmit}/>
    }
    return(
        
        <div>
            <div className="card" style={{width: "25rem"}}>
                <div className="card-body">
                    <div className="fab">
                        <Fab onClick={handleEditClick}><EditIcon fontSize="small"/></Fab>
                        <Fab style={{marginLeft:"5px"}} onClick={handleDeleteClick}><DeleteIcon fontSize="small"/></Fab>
                    </div>
                    <img className="card-img-top" alt="books" src={`https://picsum.photos/seed/${book.id}/200/100`}/>
                    {content}
                </div> 
            </div>
        </div>
    );
}

export default BookShow;