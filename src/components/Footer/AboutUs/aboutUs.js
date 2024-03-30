import './style.css';
import email from '../../../images/email.svg';
import footerClock from '../../../images/clockfooter.svg';
import geolocation from '../../../images/geolocation.svg';
import contact from '../../../images/contact.svg';
import LinkComponents from '../LinkComponent/link';



function AboutUs() {
    const arrSvg = [email, geolocation, footerClock, contact]

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
                <LinkComponents tetx_link='г. Москва. ул, Ленина 54, офис 51' />
                <LinkComponents tetx_link='Пн-Вс с 09:00 до 18:00' />
                <LinkComponents tetx_link='8 800 555 35 35' />
            </div>
        </div>

    )
}


export default AboutUs;