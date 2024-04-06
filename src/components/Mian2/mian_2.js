import photo_register_doctor from '../../images/OBJECTS.png';
import './style.css';
import DoctorVisit from './DoctorsVisit/doctorVisit';
import ButtonMain2 from './ButtonMain2/buttonMain2';
import { useState } from 'react';



function Main2() {
    const [filterStatus, setFilterStatus] = useState(1);

    // const changeStatus = function (status_number) {
    //     setFilterStatus(status_number)
    // }

    return (
        <div className='mian2_container'>
            <div className='register_doc'>
                <img src={photo_register_doctor} alt='register_user'></img>
            </div>
            <button style={{ margin: '10% 0 5% 38%' }} className='bottom_moiZapisi'>мои записи</button>
            <div className='mian'>
                <div className='div_buton_main2'>
                    <ButtonMain2 text="Предстоящие" onClick={() => setFilterStatus(1)} />
                    <ButtonMain2 text="Прошедшие" onClick={() => setFilterStatus(2)} />
                    <ButtonMain2 text="Отмененные" onClick={() => setFilterStatus(3)} />
                </div>
                <div className='data_list'>
                    <DoctorVisit filterStatus={filterStatus} />
                </div>
            </div>
        </div>

    )
}

export default Main2;