import photo_register_doctor from '../../images/OBJECTS.png';
import './style.css';
import DoctorVisit from './DoctorsVisit/doctorVisit';
import ButtonMain2 from './ButtonMain2/buttonMain2';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import doctorAPI from '../../services/api/doctorAPI';
// import { useContext } from 'react';
// import TranslateContext from '../../translateContext';
// import { useContext } from 'react';
// import Language from '../../translate_Ru_En';



function Main2() {
    // const { translatePage } = useContext(TranslateContext);
    // const [filterStatus, setFilterStatus] = useState(1);

    const { t } = useTranslation();
    const navigate = useNavigate();
    const [doctor, setDoctor] = useState([])

    const getDoctorInfo = useCallback((category) => {
        return () => {
            doctorAPI.get('/', {
                params: {
                    page: 1,
                    category: category
                }
            }).then((res) => {
                setDoctor(res.data.results);
            })
        }
    }, [])

    useEffect(() => {
        doctorAPI.get('/', {
            params: {
                page: 1,
                category: 1
            }
        }).then((res) => {
            setDoctor(res.data.results);
        })
    },[])

    function handleClicMynotes() {
        navigate('/mynotes');
    }
    return (
        <div className='mian2_container'>
            <div className='register_doc'>
                <img src={photo_register_doctor} alt='register_user'></img>
            </div>

            <button onClick={handleClicMynotes} style={{ margin: '10% 0 5% 38%' }} className='bottom_moiZapisi'>{t('buttonMyNotes')}</button>

            <div className='mian'>
                <div className='div_buton_main2'>
                    <ButtonMain2 text={t('buttonMain2filter1')} onClick={getDoctorInfo(1)} />
                    <ButtonMain2 text={t('buttonMain2filter2')} onClick={getDoctorInfo(2)} />
                    <ButtonMain2 text={t('buttonMain2filter3')} onClick={getDoctorInfo(4)} />
                </div>
                <div className='data_list'>
                    <DoctorVisit doctor={doctor} />
                </div>
            </div>
        </div>

    )
}

export default Main2;