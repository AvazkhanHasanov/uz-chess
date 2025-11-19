import star from "../../../../assets/icons/star.svg";

export default function ImageSection({book}) {
    return (
        <div className='image-section'>
            <img src={book.image} alt={'book'}/>
            <div className='rating'>
                <img src={star} alt={'star'}/>
                <span>{book.rating}</span>
            </div>
            <div className='language'>
                <span>{book.language}</span>
            </div>
        </div>
    )
}