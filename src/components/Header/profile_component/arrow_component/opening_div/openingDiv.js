import './style.css'

function OpeningDiv({ onClick, divText, logo }) {
    return (
        <div onClick={onClick} className='opening_div'>
            <div className='container_logo'>
                <img className='size_logo' src={logo} alt='logo'></img>
            </div>
            <p>{divText}</p>
        </div>
    )
}

export default OpeningDiv;