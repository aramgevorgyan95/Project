import './style.css';
import email from '../../../images/email.svg';
import footerClock from '../../../images/clockfooter.svg';
import geolocation from '../../../images/geolocation.svg';
import contact from '../../../images/contact.svg';
import LinkComponents from '../LinkComponent/link';
import TranslateContext from '../../../translateContext';
import { useContext } from 'react';
import Language from '../../../translate_Ru_En';



function AboutUs() {
    const arrSvg = [email, geolocation, footerClock, contact];
    const { translatePage } = useContext(TranslateContext)

    return (
        <div className='about_tri'>
            <div className='about_us'>
                {
                    arrSvg.map((elem, index) => {
                        return (
                            <div className='svg_aboutUs' key={index}>
                                <img className='footer_svg' src={elem} alt='svg'></img>
                            </div>
                        )
                    })
                }
            </div>
            <div className='about_us_2'>
                <LinkComponents tetx_link='allodoc@mail.com' />
                <LinkComponents tetx_link={Language[translatePage].textCityAdres} />
                <LinkComponents tetx_link={Language[translatePage].textDayJob} />
                <LinkComponents tetx_link='8 800 555 35 35' />
            </div>
        </div>

    )
}


export default AboutUs;