import React, { useEffect, useState } from "react";
import { useParams } from "react-router"
import './style.css'
import { useTranslation } from "react-i18next";
import doctorAPI from "../../services/api/doctorAPI";
// import TranslateContext from "../../translateContext";
// import { arrUserDoc } from "../../components/Mian2/datainfotmation";
// import { useContext } from "react";

function DoctorPage() {
    // const { translatePage } = useContext(TranslateContext);
    // const doctorData = t('dataDoctor', {returnObjects: true}).filter(el => el.id.toString() === id)[0];
    const [doctorData, setDoctorData] = useState();
    let { id } = useParams();
    const { t } = useTranslation();

    useEffect(() => {
        doctorAPI.get(`/user/${id}/?role=doctor`).then((res) => {
            setDoctorData(res.data)
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