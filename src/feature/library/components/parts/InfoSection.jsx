import user from '../../../../assets/icons/user.svg'
import category from '../../../../assets/icons/category.svg'
import cart from '../../../../assets/icons/cart-empty.svg'
import heart from '../../../../assets/icons/heart.svg'
import {IconAndText} from "../../../../common/IconAndText.jsx";
import Divider from "./Divider.jsx";


function ConvertPrice(price) {
    return new Intl.NumberFormat('ru', {minimumFractionDigits: 2}).format(price).replaceAll(',', ' ')
}

export default function InfoSection({book}) {

    let beforeDiscount = <span className={'before-discount'}>{ConvertPrice(book.priceBeforeDiscount)} uzs</span>
    // if (!beforeDiscount){beforeDiscount=undefined;}
    let afterDiscount = `${ConvertPrice(book.price)} uzs}`

    return (
        <div className='info-section'>
            <h3>{book.title}</h3>
            <div className={'price-section'}>
                {book.hasDiscount ? beforeDiscount : undefined}
                <span className={'after-discount'}>{book.price === 0 ? 'Bepul' : afterDiscount}</span>
            </div>
            <div className={'middle'}>
                <IconAndText icon={book.difficultyIcon}>{book.difficulty}</IconAndText>
                <Divider/>
                <IconAndText icon={category}>{book.category}</IconAndText>
                <Divider/>
                <IconAndText icon={user}>{book.author}</IconAndText>
            </div>
            <div className='bottom'>
                <button>
                    <img src={cart} alt={'Empty'}/>
                    <span> Savatcha</span>
                </button>
                <img src={heart} alt={'savatcha'}/>
            </div>
        </div>
    )
}