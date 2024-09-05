import React, {useState} from "react";
import BookCreate from "./Books/BookCreate";
import BookList from "./Books/BookList";


function Books(){
    const [books, setBooks] = useState([]);

    const handleCreate = (title) => {
        const updatedBook = [...books, {id:Math.round(Math.random() * 9999), title}];
        setBooks(updatedBook);
    }

    const handleDelete = (id) => {
        const updatedBook = books.filter((book) => {
        return book.id !== id;
        });
        setBooks(updatedBook);
    }

    const handleEdit = (id, newTitle) => {
        const editedBook = books.map((book) => {
          if(book.id === id) {
            return {...book, title: newTitle};
          }
          return book;
        });
        setBooks(editedBook);
      }
    
    return(
        <div style={{height:"100vh"}}>
            <BookList onAdd={books} onDelete={handleDelete} onEdit={handleEdit}/>
            <BookCreate onCreate={handleCreate}/>
        </div>
    );
}

export default Books;