import './Book.css'

import ImageSection from "../../../common/ImageSection.jsx";
import InfoSection from "./parts/InfoSection.jsx";


export default function Book({book}) {
    return (
        <div className='book-item'>
            <ImageSection data={book}/>
            <InfoSection book={book}/>
        </div>
    )
}