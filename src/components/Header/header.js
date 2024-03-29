import "./style.css";
import nkarAllDoc from '../../images/alloDoc.png.png'
import TextHeader from "./text_header/text";
import Icon from "./icon_component/icon";
import ProfileSettings from "./profile_component/profile_settings";
import Translate from "../translate_component/translate";


function Header() {
    return (
        <div className="header">
            <Translate language1={'RU'} language2={'EN'} />
            <div >
                <div className="header_container">
                    <div className="left_header"><img src={nkarAllDoc} alt="logo"></img></div>
                    <div className="right_header">
                        <TextHeader />
                        <Icon />
                        <ProfileSettings />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;