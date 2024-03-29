import './style.css';

function ButtonMain2({ text, onClick }) {
    return (
        <div>
            <button onClick={onClick}>{text}</button>
        </div>

        
    )
}

export default ButtonMain2;