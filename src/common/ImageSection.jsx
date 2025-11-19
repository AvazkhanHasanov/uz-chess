import star from "../assets/icons/star.svg";
import './ImageSection.css'

export default function ImageSection({data, width = 132, height = 177}) {
    return (
        <div className='image-section' style={{width: width, height: height}}>
            <img src={data.image} alt={'book'}/>
            <div className='rating'>
                <img src={star} alt={'star'}/>
                <span>{data.rating}</span>
            </div>
            <div className='language'>
                <span>{data.language}</span>
            </div>
        </div>
    )
}