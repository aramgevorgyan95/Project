import photo_register_doctor from '../../images/OBJECTS.png';
import './style.css';
import DoctorVisit from './DoctorsVisit/doctorVisit';
import ButtonMain2 from './ButtonMain2/buttonMain2';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import TranslateContext from '../../translateContext';
import Language from '../../translate_Ru_En';



function Main2() {
    const { translatePage } = useContext(TranslateContext);
    const [filterStatus, setFilterStatus] = useState(1);
    const navigate = useNavigate();

    // const changeStatus = function (status_number) {
    //     setFilterStatus(status_number)
    // }
    function handleClicMynotes() {
        navigate('/mynotes');
    }
    return (
        <div className='mian2_container'>
            <div className='register_doc'>
                <img src={photo_register_doctor} alt='register_user'></img>
            </div>

            <button onClick={handleClicMynotes} style={{ margin: '10% 0 5% 38%' }} className='bottom_moiZapisi'>{Language[translatePage].buttonMyNotes}</button>

            <div className='mian'>
                <div className='div_buton_main2'>
                    <ButtonMain2 text={Language[translatePage].buttonMain2filter1} onClick={() => setFilterStatus(1)} />
                    <ButtonMain2 text={Language[translatePage].buttonMain2filter2} onClick={() => setFilterStatus(2)} />
                    <ButtonMain2 text={Language[translatePage].buttonMain2filter3} onClick={() => setFilterStatus(3)} />
                </div>
                <div className='data_list'>
                    <DoctorVisit filterStatus={filterStatus} />
                </div>
            </div>
        </div>

    )
}

export default Main2;