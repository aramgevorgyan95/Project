import './style.css';
import nkarAlloDoc2 from '../../images/alloDoc2.png'
import FooterIconComponent from './FooterIconComponent/footericoncomponent';
import FooterApplication from './FooterApplicationComponent/footerApplication';
import LinkComponents from './LinkComponent/link'
import AboutUs from './AboutUs/aboutUs';



function Footer() {
    return (
        <div className="footer">
            <div className="container-footer">
                <div className="footer_one">
                    <img className='nkarAlloDoc2' src={nkarAlloDoc2} alt='doctor' style={{marginBottom: '15px'}} ></img>
                    <div className='text_footer'>
                        <p>Онлай- консульации специалистов врачей, то что предлагает данный сервис.</p>
                        &nbsp;
                        <p> В нашем веб и мобильном приложении вы найдете врачей экспертов, которые окажут вам персонализированную помощь онлайн 24/7</p>
                    </div>
                    <FooterIconComponent />
                    <FooterApplication />
                </div>

                <div className="footer_two">
                    <LinkComponents tetx_link='Как пользоваться'/>
                    <LinkComponents tetx_link='FAQ (ответы на вопросы)'/>
                    <LinkComponents tetx_link='Для врачей'/>
                    <LinkComponents tetx_link='О сервисе'/>
                    <LinkComponents tetx_link='Контакты'/>
                    <LinkComponents tetx_link='Пользовательское соглашение'/>
                </div>
                <div className='footer_tri'>
                    <AboutUs />
                </div>
            </div>
        </div>
    )
}

export default Footer