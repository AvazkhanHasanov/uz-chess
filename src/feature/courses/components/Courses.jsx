import '../../../feature/library/components/Book.css'
import ImageSection from "../../../common/ImageSection.jsx";
import '../../library/components/parts/InfoSection.css'
import {IconAndText} from "../../../common/IconAndText.jsx";
import pawn from '../../../assets/icons/difficulty1.svg'
import Divider from "../../library/components/parts/Divider.jsx";
import './Courses.css'
export default function Courses({course}) {
    return (
        <div className={'book-item'} style={{height:'186px'}}>
            <ImageSection data={course} width={185} height={141}/>
            <div className={"course-info"} >
                <h3>Shaxmat donalari bilan tanishuv</h3>
                <p>Salomat Bahodirov</p>
                <div className={'price-section'}>
                    <span className={'before-discount'}>200000</span>
                    <span className={'after-discount'}>250000</span>
                </div>
                <div className={'middle'}>
                    <IconAndText icon={pawn}>Salomat</IconAndText>
                    <Divider/>
                    <IconAndText icon={pawn}>Salomat</IconAndText>
                    <Divider/>
                    <IconAndText icon={pawn}>Salomat</IconAndText>

                </div>
            </div>
        </div>
    )
}