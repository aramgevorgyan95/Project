import './style.css'

function TextHeader({text}) {
    return (
        <div className='text_header'>
            <a href='#' className='text'>{text}</a>
        </div>
    )
}

export default TextHeader;