// import { useState } from "react";
import { useParams } from "react-router"
import arrUserDoc from "../../components/Mian2/datainfotmation";
import './style.css'

function DoctorPage() {
    let { id } = useParams();

    const doctorData = arrUserDoc.filter(el => el.id == id);
    console.log(doctorData)
    
    
    




    return (
        <div className="doctorImformation">
                <div className="PhotoDoctorImformation">
                        {doctorData.photo}
                </div>
        </div>
    )
}

export default DoctorPage;