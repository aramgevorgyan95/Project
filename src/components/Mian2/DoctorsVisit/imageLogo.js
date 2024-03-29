import './style.css';

function ImageLogo({src}) {
    return(
        <div>
            <img src={src} alt='logo'></img>
        </div>
    )
}

export default ImageLogo