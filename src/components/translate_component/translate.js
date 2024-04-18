import { useState } from 'react';
import './style.css';
import React from 'react';
// import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
// import TranslateContext from '../../translateContext';




function Translate({ language1, language2 }) {

    // const t = useContext(TranslateContext)
    const { t, i18n } = useTranslation();
    const [show, isShow] = useState(true);

    const handleClickTranslate = function (e) {
        i18n.changeLanguage(e)
        isShow(prev => !prev)
    }


    return (
        <div>

            <div className="container2">
                <button onClick={() => handleClickTranslate('RU')} className={show ? 'button_translate_avtive' : 'button_translate_noactive'}>{language1}</button>
                <button onClick={() => handleClickTranslate('EN')} className={show ? 'button_translate_noactive' : 'button_translate_avtive'}>{language2}</button>
            </div>

        </div>
    )
}


export default Translate;