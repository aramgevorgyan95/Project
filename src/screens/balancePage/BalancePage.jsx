import { useContext, useState } from "react"
import { balanceData } from "../../components/Mian2/datainfotmation"
import './style.css'
import rubliGreen from '../../images/rubliGreen.svg'
import TranslateContext from "../../translateContext";
// import rubliRed from '../../images/rubliRed.svg'
// import rubli from '../../images/rubli.svg'


function Balance() {
    const [status, setStatus] = useState("all");

    const { translatePage } = useContext(TranslateContext);

    return (
        <div className="balanceContainer">
            <div className="balance">

                <div className="balance_text">
                    <p>Баланс</p>
                </div>

                <div className="money_button">
                    <div className="money">
                        <h1>1 058,68</h1>
                        <img src={rubliGreen} alt="rubli" />
                    </div>
                    <div className="button_Add">
                        <button className="button_balanceAdd">Пополнить счет</button>
                    </div>
                </div>

                <div>
                    <div className="history">
                        <p>История платежей</p>
                    </div>
                    <div className="button_status">
                        <button onClick={() => setStatus("day")}>За сегодня</button>
                        <button onClick={() => setStatus("month")}>За месяц</button>
                        <button onClick={() => setStatus("all")}>За все время</button>
                    </div>
                    <div>
                        {
                            balanceData[translatePage].map(el => {
                                return status === "all" || el.status === status ?
                                    <div className="paymentHistory">
                                        <div className="paymentDiv"><img src={el.image} alt="image" /></div>
                                        <div className="paymentDiv"><p>{el.data}</p></div>
                                        <div className="paymentDiv"><p>{el.text}</p></div>
                                        <div className="paymentDiv"><p className={el.money > 0 ? "greenStyle" : "redStyle"}>{el.money > 0 ? `+${el.money}  R` : `${el.money}  R`}</p></div>
                                    </div> : null

                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Balance