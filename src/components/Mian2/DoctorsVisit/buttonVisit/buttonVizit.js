import './style.css';

function ButtonVisit({text, backgroundColor,colorText}) {

    

    const dizain = {
        backgroundColor: backgroundColor,
        color: colorText
    }

    return (
        <div>
            <button style={dizain} className='visit_button'>{text}</button>
        </div>
    )
}

export default ButtonVisit;