import './style.css';

function ButtonMain({ text, backgroundColor, border, color }) {
    const styleButton = {
        text: text,
        border: border,
        backgroundColor: backgroundColor,
        color: color
    }
    return (
        <button className='button_main' style={styleButton} >{text}</button>
    )
}

export default ButtonMain;