import './style.css';
import instagram from '../../../images/icons-instagram.svg';
import facebook from '../../../images/icons-facebook.svg';
import youtube from '../../../images/icons-youtube.svg';


function FooterIconComponent({icon}) {
    return (
        <div className='footer_icon'>
            <img src={instagram}></img>
            <img src={facebook}></img>
            <img src={youtube}></img>
        </div>
    )
}

export default FooterIconComponent;