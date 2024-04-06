import chat_logo from '../../images/chat_logo.svg'
import calendar_logo from '../../images/calendar.svg';
import clock_logo from '../../images/clock 1.svg';
import camera from '../../images/video-camera.svg';
import doc1 from '../../images/doc1.png'

// sa arden Balance eji hamar e 
import visa from '../../images/visa.svg'
import img1 from '../../images/balanci_demq.svg'
import img2 from '../../images/balanci_demq2.svg'


const arrUserDoc = [
    {
        id: 1,
        data: '01 Марта 2024',
        time: '09 : 00',
        text: 'Видео связь',
        logo: [chat_logo, calendar_logo, clock_logo, camera],
        status: 1,
        statusText: 'Запланировано',
        name: 'Ольга Никитина',
        experience: 'Стаж 15 лет',
        profession: 'Педиатр',
        photo: doc1

    },
    {
        id: 2,
        data: '09 Марта 2021 ',
        time: '19 : 00',
        text: 'Чат',
        logo: [chat_logo, calendar_logo, clock_logo, camera],
        status: 2,
        statusText: 'Состоялась',
        name: 'Лара Никитина',
        experience: 'Стаж 10 лет',
        profession: 'Оториноларинголог (ЛОР), Терапевт'

    },
    {
        id: 3,
        data: '09 Марта 2021 ',
        time: '19 : 00',
        logo: [chat_logo, calendar_logo, clock_logo, camera],
        text: 'Чат',
        status: 3,
        statusText: 'Отменена',
        name: 'Алла Никитина',
        experience: 'Стаж 12 лет',
        profession: 'Оториноларинголог (ЛОР), Терапевт'
    },
    {
        id: 4,
        data: '09 Марта 2021 ',
        time: '19 : 00',
        text: 'Видео связь',
        logo: [chat_logo, calendar_logo, clock_logo, camera],
        status: 1,
        statusText: 'Запланировано',
        name: 'Алла Никитина',
        experience: 'Стаж 12 лет',
        profession: 'Оториноларинголог (ЛОР), Терапевт'
    },
    {
        id: 5,
        data: '09 Марта 2021 ',
        time: '19 : 00',
        text: 'Чат',
        logo: [chat_logo, calendar_logo, clock_logo, camera],
        status: 2,
        statusText: 'Состоялась',
        name: 'Алла Никитина',
        experience: 'Стаж 12 лет',
        profession: 'Оториноларинголог (ЛОР), Терапевт'
    },
    {
        id: 6,
        data: '09 Марта 2021 ',
        time: '19 : 00',
        logo: [chat_logo, calendar_logo, clock_logo, camera],
        text: 'Чат',
        status: 3,
        statusText: 'Отменена',
        name: 'Алла Никитина',
        experience: 'Стаж 12 лет',
        profession: 'Оториноларинголог (ЛОР), Терапевт'
    },
    {
        id: 7,
        data: '09 Марта 2021 ',
        time: '19 : 00',
        text: 'Видео связь',
        logo: [chat_logo, calendar_logo, clock_logo, camera],
        status: 1,
        statusText: 'Запланировано',
        name: 'Алла Никитина',
        experience: 'Стаж 12 лет',
        profession: 'Оториноларинголог (ЛОР), Терапевт'
    },
    {
        id: 8,
        data: '09 Марта 2021 ',
        time: '19 : 00',
        text: 'Чат',
        logo: [chat_logo, calendar_logo, clock_logo, camera],
        status: 2,
        statusText: 'Состоялась',
        name: 'Алла Никитина',
        experience: 'Стаж 12 лет',
        profession: 'Оториноларинголог (ЛОР), Терапевт'
    },
    {
        id: 9,
        data: '09 Марта 2021 ',
        time: '19 : 00',
        logo: [chat_logo, calendar_logo, clock_logo, camera],
        text: 'Видео связь',
        status: 3,
        statusText: 'Отменена',
        name: 'Алла Никитина',
        experience: 'Стаж 12 лет',
        profession: 'Оториноларинголог (ЛОР), Терапевт'
    },
];

export default arrUserDoc;



export const balanceData = [
    {
        status: "day",
        image: visa,
        money: 500,
        data: '10.03.2021',
        text: 'Пополнение'
    },
    {
        status: "month",
        image: img1,
        money: -460,
        data: '10.03.2021',
        text: 'Оплата за консультацию'

    },
    {
        status: "all",
        image:img2,
        money: -2409,
        data: '10.03.2021',
        text: 'Оплата за консультацию'

    },
    {
        status: "day",
        image: visa,
        money: 5050,
        data: '10.03.2021',
        text: 'Пополнение'
    },
    {
        status: "month",
        image: img1,
        money: -4650,
        data: '10.03.2021',
        text: 'Оплата за консультацию'

    },
    {
        status: "all",
        image:img2,
        money: -2249,
        data: '10.03.2021',
        text: 'Оплата за консультацию'

    },

]