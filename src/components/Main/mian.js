import "./style.css";
import photo_doctor from '../../images/allodoctor.png.png';
import ButtonMain from "./ButtonMain/buttonMain";
import { useTranslation } from "react-i18next";

// import TranslateContext from "../../translateContext";
// import { useContext } from "react";
// import Language from "../../translate_Ru_En";

function Main() {

    const { t } = useTranslation();
    // const { translatePage } = useContext(TranslateContext);

    return (
        <div className="main_container">
            <div className="text_main_div">
                <div className="orange_line"></div>
                <div className="text_main">
                    <p>{t('mianConsultText')}</p>
                    <p>{t('mianConsultText2')}</p>
                </div>
                <div className="text2_main">
                    {t('main_text')}
                </div>
                <div className="button_container">
                    <ButtonMain text={t('mianButtonZapis')} color='#56CCF2' backgroundColor='white' border='2px solid #56CCF2' />
                    <ButtonMain text={t('mianButtonHowWorks')} color='white' backgroundColor='#56CCF2' border='none' />
                </div>

            </div>
            <div className="photo_doc_mian">
                <img className="img" src={photo_doctor} alt="doc_photo"></img>
            </div>

        </div>
    )
}

export default Main;