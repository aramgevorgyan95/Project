import './style.css';
import appStore from '../../../images/App Store Badge.svg';
import googlePlay from '../../../images/google play white.svg';

function FooterApplication() {
    return (
        <div className='footer_application'>
            <img src={appStore}></img>
            <img src={googlePlay}></img>
        </div>
    )
}

export default FooterApplication;