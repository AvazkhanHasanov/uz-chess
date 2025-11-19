import Book from "./feature/library/components/Book.jsx";
import {books} from "./feature/library/data.js";

export default function App() {
    return (
        <div style={{display: "flex", flexDirection: "column", gap: '20px'}}>
            {
                books.map(book => <Book key={book.id} book={book}/>)
            }

        </div>
    )
}