import { useState } from "react";
import { useParams } from "react-router"
import arrUserDoc from "../../components/Mian2/datainfotmation";
import './style.css'

function DoctorPage() {
    let { id } = useParams();
    console.log(id)

    const [doctorData, setDoctorData] = useState(arrUserDoc.filter(el => el.id == id));




    return (
        <div className="doctorImformation">
            {
                doctorData.map((el, index) => {
                    return (
                        <>

                        </>
                    )
                })
            }
        </div>
    )
}

export default DoctorPage;