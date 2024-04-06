import React from "react";
import { useParams } from "react-router"
import arrUserDoc from "../../components/Mian2/datainfotmation";
import './style.css'

function DoctorPage() {
    let { id } = useParams();

    const doctorData = arrUserDoc.filter(el => el.id == id)[0];


    return (
        <div className="doctorImformation">
            <div className="PhotoDoctorImformation">
                <img src={doctorData.photo} alt="dd" />
                <div className="info">
                    <p style={{fontSize: '24px', color: '#FFFFFF'}}>{doctorData.name}</p>
                    <p style={{fontSize: '18px', color: '#FFFFFF'}}>{doctorData.profession}</p>
                    <p style={{fontSize: '18px', color: '#FFFFFF'}}>{doctorData.experience}</p>
                </div>
            </div>
            <div className="consultation">
                <p>{doctorData.moneyConsult}</p>
                <div className="valuta">
                    <img src={doctorData.valuta} alt="valuta" />
                </div>
                <p>3</p>
            </div>
        </div>
    )
}

export default DoctorPage;