import "./style.css";
import nkar_zang from '../../../images/zang_icon.svg'
import Icone1 from "./icon1";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { UserAction } from "../../../store/actions";

function Icon () {
    const dispatch = useDispatch()
    const clickHandler = useCallback(()=> {
        dispatch(UserAction.login('Aram',"Aram95@mail.com"))
    })
    return (
        <div >
            <div onClick={clickHandler} className="zang">
                <img className="image_zang" src={nkar_zang} alt="zang"></img>
                {/* <div className="zangi_klor">3</div> */} 
                <Icone1 />
            </div>
        </div>
    )
}

export default Icon;