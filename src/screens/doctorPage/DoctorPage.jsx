import { useState } from "react";
import { useParams } from "react-router"
import arrUserDoc from "../../components/Mian2/datainfotmation";

function DoctorPage() {
    let { id } = useParams();

    const [doctorData, setDoctorData] = useState(arrUserDoc.filter(el => el.id === id));


    return (
        <>
            <div>
                {id}
            </div>
        </>
    )
}

export default DoctorPage;