import { useState } from 'react';
import './style.css';
import React, { useContext } from 'react';
import TranslateContext from '../../translateContext';




function Translate({ language1, language2 }) {

    const t = useContext(TranslateContext)

    const [show, isShow] = useState(true);

    const handleClickTranslate = function (e) {
        t.setTranslatePage(e.target.innerHTML)
        isShow(prev => !prev)
    }


    return (
        <div>

            <div className="container2">
                <button onClick={handleClickTranslate} className={show ? 'button_translate_avtive' : 'button_translate_noactive'}>{language1}</button>
                <button onClick={handleClickTranslate} className={show ? 'button_translate_noactive' : 'button_translate_avtive'}>{language2}</button>
            </div>

        </div>
    )
}


export default Translate;