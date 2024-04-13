import './style.css';
import ProfilePhoto from "./profile_foto";
import ProfileName from './profile_name';
import Arrow from './arrow_component/arrow';
import Language from '../../../translate_Ru_En';
import TranslateContext from '../../../translateContext';
import { useContext } from 'react';



function ProfileSettings() {
    const { translatePage } = useContext(TranslateContext);
    return (
        <div className='profile_container'>
            <div className="profile">
                <ProfilePhoto name={Language[translatePage].profile_photo_name}/>
                <ProfileName name={Language[translatePage].profile_photo_name} />
                <Arrow />
            </div>
            
        </div>

    )
}

export default ProfileSettings;