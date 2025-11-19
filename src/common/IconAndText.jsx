import './IconAndText.css'

export function  IconAndText({icon, children}) {
    return(
        <div className={'icon-and-text'}>
            <img src={icon} alt={'difficulty'}/>
            <span>{children}</span>
        </div>
    )
}