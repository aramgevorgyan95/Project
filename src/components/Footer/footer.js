import './style.css';
import nkarAlloDoc2 from '../../images/alloDoc2.png'
import FooterIconComponent from './FooterIconComponent/footericoncomponent';
import FooterApplication from './FooterApplicationComponent/footerApplication';
import LinkComponents from './LinkComponent/link'
import AboutUs from './AboutUs/aboutUs';
import { useContext } from 'react';
import TranslateContext from '../../translateContext';
import Language from '../../translate_Ru_En';




function Footer() {

    const { translatePage } = useContext(TranslateContext);
    return (
        <div className="footer">
            <div className="container-footer">
                <div className="footer_one">
                    <img className='nkarAlloDoc2' src={nkarAlloDoc2} alt='doctor' style={{marginBottom: '15px'}} ></img>
                    <div className='text_footer'>
                        <p>{Language[translatePage].onlinConsultText}</p>
                        &nbsp;
                        <p>{Language[translatePage].onlinConsultText2}</p>
                    </div>
                    <FooterIconComponent />
                    <FooterApplication />
                </div>

                <div className="footer_two">
                    <LinkComponents tetx_link={Language[translatePage].linkHowToUse}/>
                    <LinkComponents tetx_link={Language[translatePage].linkFAQ}/>
                    <LinkComponents tetx_link={Language[translatePage].linkDoctor}/>
                    <LinkComponents tetx_link={Language[translatePage].linkService}/>
                    <LinkComponents tetx_link={Language[translatePage].linkContact}/>
                    <LinkComponents tetx_link={Language[translatePage].linkUser}/>
                </div>
                <div className='footer_tri'>
                    <AboutUs />
                </div>
            </div>
        </div>
    )
}

export default Footer