import photo_register_doctor from '../../images/OBJECTS.png';
import './style.css';
import DoctorVisit from './DoctorsVisit/doctorVisit';
import ButtonMain2 from './ButtonMain2/buttonMain2';
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import doctorAPI from '../../services/api/doctorAPI';
import { useDispatch, useSelector } from 'react-redux';
import { doctorListSelector } from '../../store/selectors/doctorSelector';
import { DoctorAction } from '../../store/actions';




function Main2() {

    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const doctorData = useSelector(doctorListSelector);


    const getDoctorInfo = useCallback((category) => {
        return () => {
            doctorAPI.get('/get-doctors/', {
                params: {
                    page: 1,
                    category: category
                }
            }).then((res) => {
                dispatch(DoctorAction.setDoctorsAction(res.data.results));
            })
        }
    }, [])

    useEffect(() => {
        doctorAPI.get('/get-doctors/', {
            params: {
                page: 1,
                category: 1
            }
        }).then((res) => {
            dispatch(DoctorAction.setDoctorsAction(res.data.results));
        })
    }, [])

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
                    <DoctorVisit doctorData={doctorData} />
                </div>
            </div>
        </div>

    )
}

export default Main2;