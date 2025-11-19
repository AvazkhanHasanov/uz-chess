import Book from "./feature/library/components/Book.jsx";
import {books, course} from "./feature/library/data.js";
import Courses from "./feature/courses/components/Courses.jsx";

export default function App() {
    return (
        <div style={{display: "flex", flexDirection: "column", gap: '20px'}}>
            {
                books.map(book => <Book key={book.id} book={book}/>)
            }
            {
                course.map(course => <Courses key={course.id} course={course}/>)
            }


        </div>
    )
}