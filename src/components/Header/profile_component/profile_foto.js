import './style.css';


function ProfilePhoto({name}) {
 

    return (

        <div className='profile_photo'>
            {name[0]}
        </div>
    )
}

export default ProfilePhoto;