import './style.css';
import React, { useState } from 'react';


function Translate({ language1, language2 }) {

    const [show, isShow] = useState(true);

    const handleClickTranslate = function () {
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