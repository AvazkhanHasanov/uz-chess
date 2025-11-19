

import './Book.css'

import ImageSection from "./parts/ImageSection.jsx";
import InfoSection from "./parts/InfoSection.jsx";


export default function Book({book}) {
    return (
        <div className='book-item'>
           <ImageSection book={book} />
            <InfoSection book={book} />
        </div>
    )
}