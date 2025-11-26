import Book from "./feature/library/components/Book.jsx";
import {books, course} from "./feature/library/data.js";
import Courses from "./feature/courses/components/Courses.jsx";
import {BannerFunc} from "./feature/courses/components/Banner.jsx";
import graduation from '../src/assets/icons/graduation.svg'
import booksImg from './assets/icons/booksImg.svg'
import {styled} from "styled-components";

const FilterContainer = styled.div`
    width: 334px;
    //height: 489px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: var(--dark);
    border-radius: 8px;
    border: 1px solid #1F272A;
`

const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h3 {
        font-weight: 500;
        font-size: 18px;
    }
    button{
        
        border: none;
        outline: none;
        font-size: 16px;
        background-color: transparent;
        color: var(--blue);
        
    }
    button:hover {
        cursor: pointer;
    }
`

export default function App() {
    return (
        <div style={{display: "flex", flexDirection: "column", gap: '20px'}}>
            <FilterContainer>
                <Header><h3>text</h3>
                    <button>Tozalash</button>
                </Header>
            </FilterContainer>
            {
                books.map(book => <Book key={book.id} book={book}/>)
            }
            {
                course.map(course => <Courses key={course.id} course={course}/>)
            }
            <BannerFunc title={'Kitoblar '} img={graduation}/>
            <BannerFunc title={'Kitoblar '} img={booksImg}/>
        </div>
    )
}