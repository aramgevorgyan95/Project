import React, { useState } from 'react';
import ArrowImage from '../../../../images/slac_depi_var.svg';
import './style.css';
import OpeningDiv from './opening_div/openingDiv';
import user_logo from '../../../../images/user_logo.svg'
import money from '../../../../images/credit_card_logo.svg'
import faq from '../../../../images/help_logo.svg'
import logout from '../../../../images/logout_logo.svg'
import { useNavigate } from 'react-router';


function Arrow() {

    const [arrow, setArrow] = useState(false);
    const navigate = useNavigate()


    // useEffect(() => {
    //     if (arrow) {
    //         setArrow(false)
    //     }
    // }, [arrow])

    function handleClick() {
        setArrow(!arrow)
    }

    function handleBalancClick() {
        navigate('/balance');
    }


    return (
        <div>
            <button className='button_arrow' onClick={handleClick}  >
                <img className={arrow ? 'image_arrow' : null} src={ArrowImage} alt='arrow' ></img>
            </button>
            <div className='arrow_div'>
                {arrow ? <div className='arrow_opening_div'>
                    <OpeningDiv divText='Мой Профил' logo={user_logo} />
                    <OpeningDiv onClick={handleBalancClick} divText='Пополнить баланс' logo={money} />
                    <OpeningDiv divText='FAQ' logo={faq} />
                    <OpeningDiv divText='Выйти' logo={logout} />
                </div> : null}
            </div>
        </div>
    )
}

export default Arrow;