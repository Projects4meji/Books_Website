import BookShow from "./BookShow";

function BookList({onAdd, onDelete, onEdit}){
    const addBooks = onAdd.map((book) => {
        return <BookShow 
                    onEdit={onEdit}
                    delBook={onDelete} 
                    key={book.id} 
                    book={book}/>
    });
    return(
        <div style={{display:"flex", justifyContent:"flex-start", flexWrap:"wrap", width:"70%"}}>
        {addBooks}
        </div>
    );
}

export default BookList;