import "./style.css";
import nkarAllDoc from '../../images/alloDoc.png.png'
import TextHeader from "./text_header/text";
import Icon from "./icon_component/icon";
import ProfileSettings from "./profile_component/profile_settings";
import Translate from "../translate_component/translate";
import { useContext } from "react";
import TranslateContext from "../../translateContext";
import language from "../../translate_Ru_En";
// import language from "../../translate_Ru_En";


function Header() {
    const {translatePage} = useContext(TranslateContext)
    return (
        <div className="header">
            <Translate language1={'RU'} language2={'EN'} />
            <div >
                <div className="header_container">
                    <div className="left_header"><img src={nkarAllDoc} alt="logo"></img></div>
                    <div className="right_header">
                        <TextHeader text={language[translatePage].text1}/>
                        <TextHeader text={'Мои записи'}/>
                        <TextHeader text={'Записаться к врачу'}/>
                        <Icon />
                        <ProfileSettings />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;