import "./style.css";
import nkar_zang from '../../../images/zang_icon.svg'
import Icone1 from "./icon1";

function Icon () {
    return (
        <div >
            <div className="zang">
                <img className="image_zang" src={nkar_zang} alt="zang"></img>
                {/* <div className="zangi_klor">3</div> */} 
                <Icone1 />
            </div>
        </div>
    )
}

export default Icon;