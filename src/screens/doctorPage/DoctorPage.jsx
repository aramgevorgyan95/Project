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

    let { id } = useParams();

    const { t } = useTranslation();

    
    
    const [doctorId, setDoctorId] = useState([])
    
    useEffect(() => {
        doctorAPI.get('/', {
            params: {
                id: id
            }
        }).then((res) => {
            setDoctorId(res.data.results);
            // console.log(res.data.results);
        }).catch(error => {
            console.error('Ошибка при загрузке данных:', error);
        })
    }, [id])
    
    const doctorData = doctorId.filter(el => el.id.toString() === id);
    

    if (doctorData.length === 0) {
        return <p>Loading...</p>;
    }

    
  const tagChangeText = (textt) => {
    return {
      __html: textt
    }
  }
    return (
        <div className="doctorImformation">
            <div className="PhotoDoctorImformation">
                <img src={doctorData[0].profile_image} alt="dd" />
                <div className="info">
                    <p style={{ fontSize: '24px', color: '#FFFFFF' }}>{doctorData[0].first_name}</p>
                    <p style={{ fontSize: '18px', color: '#FFFFFF' }}>{doctorData[0].last_name}</p>
                    <p style={{ fontSize: '18px', color: '#FFFFFF' }}>{doctorData[0].user_categories[0].category.title.ru}</p>
                </div>
            </div>
            <div className="canteiner-consultation">
                <div className="money_consultation">
                    <p dangerouslySetInnerHTML={tagChangeText(doctorData[0].user_categories[0].category.full_description.ru)}></p>
                </div>
            </div>
        </div>
    )
}

export default DoctorPage;