import "./style.css";
import nkarAllDoc from '../../images/alloDoc.png.png'
import TextHeader from "./text_header/text";
import Icon from "./icon_component/icon";
import ProfileSettings from "./profile_component/profile_settings";
import Translate from "../translate_component/translate";
import { useContext } from "react";
import TranslateContext from "../../translateContext";
import Language from "../../translate_Ru_En";
import { useNavigate } from "react-router";




function Header() {
    const { translatePage } = useContext(TranslateContext);
    const navigate = useNavigate()

    function homeClick() {
        navigate('/')
    }
    return (
        <div className="header">
            <Translate language1={'RU'} language2={'EN'} />
            <div >
                <div className="header_container">
                    <div onClick={homeClick} className="left_header"><img src={nkarAllDoc} alt="logo"></img></div>
                    <div className="right_header">
                        <TextHeader text={Language[translatePage].header_text_first} />
                        <TextHeader text={Language[translatePage].header_text_second} />
                        <TextHeader text={Language[translatePage].header_text_third} />
                        <Icon />
                        <ProfileSettings />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;