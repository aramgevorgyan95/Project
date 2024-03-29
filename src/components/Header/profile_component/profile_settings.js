import './style.css';
import ProfilePhoto from "./profile_foto";
import ProfileName from './profile_name';
import Arrow from './arrow_component/arrow';



function ProfileSettings() {
    return (
        <div className='profile_container'>
            <div className="profile">
                <ProfilePhoto name='Артем Свиридов'/>
                <ProfileName name='Артем Свиридов' />
                <Arrow />
            </div>
            
        </div>

    )
}

export default ProfileSettings;