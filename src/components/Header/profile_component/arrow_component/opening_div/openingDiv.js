import './style.css'

function OpeningDiv({ divText, logo }) {
    return (
        <div className='opening_div'>
            <div className='container_logo'>
                <img className='size_logo' src={logo} alt='logo'></img>
            </div>
            <p>{divText}</p>
        </div>
    )
}

export default OpeningDiv;