import './style.css';

function ProfileName({name}) {
    return (
        <div className='profile_name'>
            <p>{name}</p>
        </div>
    )
}

export default ProfileName;