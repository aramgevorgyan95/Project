// import { useState } from 'react';
import { useNavigate } from 'react-router';
import { arrUserDoc, buttonDoctorVisit } from '../datainfotmation';
import ButtonVisit from './buttonVisit/buttonVizit';
import ImageLogo from './imageLogo';
import './style.css';
import TranslateContext from '../../../translateContext';
import { useCallback, useContext } from 'react';





function DoctorVisit({ filterStatus }) {
    //    const filteredArr = arrUserDoc
    // const [show, setShow] = useState(1);
    // const filteredArr = arrUserDoc.filter((el) => el.status === show);

    // const changeStatus = function (show) {
    //     setFilterStatus(show)
    // } 
    const { translatePage } = useContext(TranslateContext);
    const filteredArr = arrUserDoc[translatePage].filter((el) => el.status === filterStatus);
    // console.log(arrUserDoc[translatePage].filter((el) => el.status === filterStatus));
    const navigate = useNavigate();
    // console.log(filterStatus)



    const doctorInfoClick = useCallback((id) => {
        return () => {
            navigate(`/doctor/${id}`)
        }
    },)



    return (
        <>
            {
                filteredArr.map((el, index) => {
                    return (
                        <div onClick={doctorInfoClick(el.id)} className='main_visit' key={index}>

                            <div className='visit_header'>
                                <div className='header_left'>
                                    <ImageLogo src={el.logo[1]} />
                                    <p>{el.data}</p>
                                    <ImageLogo src={el.logo[2]} />
                                    <p>{el.time}</p>
                                    <ImageLogo src={el.logo[3]} />
                                    <p>{el.text}</p>
                                </div>
                                <div className='visitHeader_status'>
                                    <p className={`${filterStatus === 1 ? 'orange' : 'visitHeader_status'} ${filterStatus === 2 ? 'green' : 'visitHeader_status'} ${filterStatus === 3 ? 'red' : 'visitHeader_status'}`}>{el.statusText}</p>
                                </div>
                            </div>
                            <div className='visit_imfo'>
                                <div className='photo_ingfo'>
                                    <div className='photo_visit'>
                                        <img src={el.photo} alt='photo' />
                                    </div>
                                    <div className='imfo_name'>
                                        <p style={{ color: '#4F4F4F', fontWeight: 'bold' }}>{el.name}</p>
                                        <p style={{ color: '#AAAAAA' }}>{el.profession}</p>
                                        <p style={{ color: '#4F4F4F' }}>{el.experience}</p>
                                    </div>
                                </div>
                                <div className='visitButton_container'>
                                    <ButtonVisit text={buttonDoctorVisit[translatePage].buttonDoctorVizitZapis} backgroundColor='#56CCF2' colorText='#FFFFFF' />
                                    <ButtonVisit text={buttonDoctorVisit[translatePage].buttonResolution} backgroundColor='#F6F8FB' colorText='#A7A7A7' />
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