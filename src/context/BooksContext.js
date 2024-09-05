import {BooksContext} from "./context";


function Provider({children}) {
    return( 
        <BooksContext.Provider value={{}}>
            {children}
        </BooksContext.Provider>
    );
}

export {BooksContext, Provider};