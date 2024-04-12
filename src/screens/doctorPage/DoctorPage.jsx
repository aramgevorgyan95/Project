import React, { useContext } from "react";
import { useParams } from "react-router"
import { arrUserDoc } from "../../components/Mian2/datainfotmation";
import './style.css'
import TranslateContext from "../../translateContext";

function DoctorPage() {
    let { id } = useParams();

    const { translatePage } = useContext(TranslateContext);

    const doctorData = arrUserDoc[translatePage].filter(el => el.id.toString() === id)[0];

    // console.log(arrUserDoc[translatePage].filter(el => el.id == id)[0].id);
    // console.log(id);


    return (
        <div className="doctorImformation">
            <div className="PhotoDoctorImformation">
                <img src={doctorData.photo} alt="dd" />
                <div className="info">
                    <p style={{ fontSize: '24px', color: '#FFFFFF' }}>{doctorData.name}</p>
                    <p style={{ fontSize: '18px', color: '#FFFFFF' }}>{doctorData.profession}</p>
                    <p style={{ fontSize: '18px', color: '#FFFFFF' }}>{doctorData.experience}</p>
                </div>
            </div>
            <div className="canteiner-consultation">
                <div className="money_consultation">
                    <p>{doctorData.moneyConsult}</p>
                    <div className="valuta">
                        <img src={doctorData.valuta} alt="valuta" />
                    </div>
                    <p>/ консультация</p>
                </div>
                <div className="time_consultation">

                </div>
            </div>
        </div>
    )
}

export default DoctorPage;