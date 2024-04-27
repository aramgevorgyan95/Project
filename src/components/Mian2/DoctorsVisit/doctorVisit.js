import './style.css';
import { useNavigate } from 'react-router';
import ButtonVisit from './buttonVisit/buttonVizit';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
// import { useState } from 'react';
// import { arrUserDoc, buttonDoctorVisit } from '../datainfotmation';
// import ImageLogo from './imageLogo';
// import TranslateContext from '../../../translateContext';
// import { useContext } from 'react';





function DoctorVisit({ doctorData }) {
    // const filteredArr = arrUserDoc
    // const [show, setShow] = useState(1);
    // const filteredArr = arrUserDoc.filter((el) => el.status === show);

    // const changeStatus = function (show) {
    //     setFilterStatus(show)
    // } 

    // const filteredArr = dataDoctor.filter((el) => el.status === filterStatus);
    // const { translatePage } = useContext(TranslateContext);
    // const dataDoctor = t('dataDoctor', { returnObjects: true });


    const { t } = useTranslation();
    const navigate = useNavigate();



    const doctorInfoClick = useCallback((id) => {
        return () => {
            navigate(`/doctor/${id}`)
        }
    })
    return (
        <>

            {
                doctorData.map((el, index) => {
                    return (

                        <div onClick={doctorInfoClick(el.id)} className='main_visit' key={index}>
                            <div className='visit_header'>
                                <div className='header_left'>
                                    {/* <ImageLogo src={el.logo[1]} />
                                    <p>{el.data}</p>
                                    <ImageLogo src={el.logo[2]} />
                                    <p>{el.time}</p>
                                    <ImageLogo src={el.logo[3]} />
                                    <p>{el.text}</p> */}
                                    <div className='visitHeader_status'>
                                        <p className={`${el.user_categories[0].category.id === 1 ? 'orange' : 'visitHeader_status'} ${el.user_categories[0].category.id === 2 ? 'green' : 'visitHeader_status'} ${el.user_categories[0].category.id === 4 ? 'red' : 'visitHeader_status'}`}>STATUS</p>
                                    </div>
                                </div>

                            </div>
                            <div className='visit_imfo'>
                                <div className='photo_ingfo'>
                                    <div className='photo_visit'>
                                        <img src={el.profile_image} alt='photo' />
                                    </div>
                                    <div className='imfo_name'>
                                        <p style={{ color: '#4F4F4F', fontWeight: 'bold' }}>{el.first_name} {el.last_name}</p>
                                        <p style={{ color: '#AAAAAA' }}>{el.user_categories[0].category.title.ru}</p>
                                        <p style={{ color: '#4F4F4F', }} >{el.date_of_birth}</p>

                                        {/* sorov tvel enq te qani tarva staj uni tvyal mardy */}
                                        <p style={{ color: '#4F4F4F', }} >Стаж: {((new Date().getFullYear()) - el.excperience_start_year)} лет</p>

                                    </div>
                                </div>
                                <div className='visitButton_container'>
                                    <ButtonVisit text={t('buttonDoctorVisit.buttonDoctorVizitZapis')} backgroundColor='#56CCF2' colorText='#FFFFFF' />
                                    <ButtonVisit text={t('buttonDoctorVisit.buttonResolution')} backgroundColor='#F6F8FB' colorText='#A7A7A7' />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>


    )
}

export default DoctorVisit;