import React, { useState } from "react";

function BookEdit({book, onSubmit}){
    const [title, setTitle] = useState(book.title);

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(book.id, title)
        setTitle("");
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} onChange={handleChange} />
                <button className="btn btn-primary">Enter</button>
            </form>
        </div>
    );
}

export default BookEdit;