import './style.css';

function LinkComponents({ tetx_link }) {
    return (
        <div className='link'>
            <a className='link_text' href='#'>{tetx_link}</a>
        </div>
    )
}


export default LinkComponents;