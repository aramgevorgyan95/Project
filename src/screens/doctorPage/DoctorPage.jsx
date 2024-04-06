import React from "react";
import { useParams } from "react-router"
import arrUserDoc from "../../components/Mian2/datainfotmation";
import './style.css'

function DoctorPage() {
    let { id } = useParams();

    const doctorData = arrUserDoc.filter(el => el.id == id)[0];
    console.log(doctorData)







    return (
        <div className="doctorImformation">
            <div className="PhotoDoctorImformation">
                <img src={doctorData.photo} alt="dd" />
                <div>
                    <p>{doctorData.name}</p>
                    <p>{doctorData.profession}</p>
                    <p>{doctorData.experience}</p>
                </div>
            </div>
            <div>
                <p>3</p>
                <p>3</p>
            </div>
        </div>
    )
}

export default DoctorPage;