import React, { useEffect, useState } from "react";
import { useParams } from "react-router"
import './style.css'
import { useTranslation } from "react-i18next";
import doctorAPI from "../../services/api/doctorAPI";
import { useDispatch, useSelector } from "react-redux";
import { DoctorAction } from "../../store/actions";
import { selectedDoctorSelector } from "../../store/selectors/doctorSelector";


function DoctorPage() {
    
    let { id } = useParams();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const doctorData = useSelector(selectedDoctorSelector);

    useEffect(() => {
        doctorAPI.get(`/user/${id}/?role=doctor`).then((res) => {
            dispatch(DoctorAction.setSelectedDoctorAction(res.data))
        }).catch(error => {
            console.error('Error:', error);
        })
    }, [id])

    return (
        !doctorData ? <p>Loading...</p> :
            <div className="doctorImformation">
                <div className="PhotoDoctorImformation">
                    <img src={doctorData?.profile_image} alt="dd" />
                    <div className="info">
                        <p style={{ fontSize: '24px', color: '#FFFFFF' }}>{doctorData?.first_name}</p>
                        <p style={{ fontSize: '18px', color: '#FFFFFF' }}>{doctorData?.last_name}</p>
                        <p style={{ fontSize: '18px', color: '#FFFFFF' }}>{doctorData?.user_categories[0].category.title.ru}</p>
                    </div>
                </div>
                <div className="canteiner-consultation">
                    <div className="money_consultation">
                        <p dangerouslySetInnerHTML={{ __html: doctorData?.user_categories[0].category.full_description.ru }}></p>
                    </div>
                </div>
            </div>
    )
}

export default DoctorPage;