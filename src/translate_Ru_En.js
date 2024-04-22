import chat_logo from './images/chat_logo.svg'
import calendar_logo from './images/calendar.svg';
import clock_logo from './images/clock 1.svg';
import camera from './images/video-camera.svg';
import rubliConsult from './images/poqrRubli.png'
import doc1 from './images/doc1.png'
import doc2 from './images/doc2.jpg'
import doc3 from './images/doc3.jpg'
import doc4 from './images/doc4.jpg'
import doc5 from './images/doc5.jpg'
import doc6 from './images/doc6.jpg'
import doc7 from './images/doc7.jpg'
import doc8 from './images/doc8.jpg'
import doc9 from './images/doc9.jpg'


// sa arden Balance eji hamar e 
import visa from './images/visa.svg'
import img1 from './images/balanci_demq.svg'
import img2 from './images/balanci_demq2.svg'



const Language = {
    RU: {
        translation: {
            //Header---------------------------------------------------------------------------------------------------------------------------------------------------
            header_text_first: 'Как пользоваться?',
            header_text_second: 'Мои записи',
            header_text_third: 'Записаться к врачу',
            profile_photo_name: 'Артем Свиридов',

            //Mian-----------------------------------------------------------------------------------------------------------------------------------------------------
            mianConsultText: 'Онлайн консультации от',
            mianConsultText2: 'врачей специалистов 24/7',
            main_text: <p>
                Проконсультируйтесь <b>сейчас</b> или по <b>предварительной записи</b> со своего компьютера или c помощью нашего приложения, доступного в
                <b className='blue_text'>App Store</b> и <b className='blue_text'>Google Play</b>
            </p>,
            mianButtonZapis: 'Записаться',
            mianButtonHowWorks: 'Как это работает?',

            //Main2--------------------------------------------------------------------------------------------------------------------------------------------------------
            buttonMyNotes: 'мои записи',
            buttonMain2filter1: 'Терапевт',
            buttonMain2filter2: 'Педиатр',
            buttonMain2filter3: 'Акушер-гинеколог',

            //footer--------------------------------------------------------------------------------------------------------------------------------------------------------
            onlinConsultText: 'Онлай- консульации специалистов врачей, то что предлагает данный сервис.',
            onlinConsultText2: 'Онлай- консульации специалистов врачей, то что предлагает данный сервис.',
            linkHowToUse: 'Как пользоваться',
            linkFAQ: 'FAQ (ответы на вопросы)',
            linkDoctor: 'Для врачей',
            linkService: 'О сервисе',
            linkContact: 'Контакты',
            linkUser: 'Пользовательское соглашение',

            //footerAbout---------------------------------------------------------------------------------------------------------------------------------------------------
            textCityAdres: 'г. Москва. ул, Ленина 54, офис 51',
            textDayJob: 'Пн-Вс с 09:00 до 18:00',

            //balancePage---------------------------------------------------------------------------------------------------------------------------------------------------
            headerTextBalance: 'Баланс',
            historyBalance: 'История платежей',
            buttonBalance: 'Пополнить счет',
            buttonDayBalance: 'За сегодня',
            buttonMonthBalance: 'За месяц',
            buttonAllBalance: 'За все время',

            dataDoctor: [
                {
                    id: 1,
                    data: '01 Марта 2024',
                    time: '09 : 00',
                    text: 'Камера',
                    logo: [chat_logo, calendar_logo, clock_logo, camera],
                    status: 1,
                    statusText: 'Запланировано',
                    name: 'Ольга Никитина',
                    experience: 'Стаж 15 лет',
                    profession: 'Педиатр',
                    photo: doc1,
                    moneyConsult: '900',
                    valuta: rubliConsult

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
                    profession: 'Оториноларинголог (ЛОР), Терапевт',
                    photo: doc2,
                    moneyConsult: '500',
                    valuta: rubliConsult

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
                    profession: 'Оториноларинголог (ЛОР), Терапевт',
                    photo: doc3,
                    moneyConsult: '1100',
                    valuta: rubliConsult
                },
                {
                    id: 4,
                    data: '09 Марта 2021 ',
                    time: '19 : 00',
                    text: 'Камера',
                    logo: [chat_logo, calendar_logo, clock_logo, camera],
                    status: 1,
                    statusText: 'Запланировано',
                    name: 'Алла Никитина',
                    experience: 'Стаж 12 лет',
                    profession: 'Оториноларинголог (ЛОР), Терапевт',
                    photo: doc4,
                    moneyConsult: '800',
                    valuta: rubliConsult
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
                    profession: 'Оториноларинголог (ЛОР), Терапевт',
                    photo: doc5,
                    moneyConsult: '750',
                    valuta: rubliConsult
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
                    profession: 'Оториноларинголог (ЛОР), Терапевт',
                    photo: doc6,
                    moneyConsult: '500',
                    valuta: rubliConsult,
                },
                {
                    id: 7,
                    data: '09 Марта 2021 ',
                    time: '19 : 00',
                    text: 'Камера',
                    logo: [chat_logo, calendar_logo, clock_logo, camera],
                    status: 1,
                    statusText: 'Запланировано',
                    name: 'Алла Никитина',
                    experience: 'Стаж 12 лет',
                    profession: 'Оториноларинголог (ЛОР), Терапевт',
                    photo: doc7,
                    moneyConsult: '600',
                    valuta: rubliConsult,
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
                    profession: 'Оториноларинголог (ЛОР), Терапевт',
                    photo: doc8,
                    moneyConsult: '900',
                    valuta: rubliConsult
                },
                {
                    id: 9,
                    data: '09 Марта 2021 ',
                    time: '19 : 00',
                    logo: [chat_logo, calendar_logo, clock_logo, camera],
                    text: 'Камера',
                    status: 3,
                    statusText: 'Отменена',
                    name: 'Алла Никитина',
                    experience: 'Стаж 12 лет',
                    profession: 'Оториноларинголог (ЛОР), Терапевт',
                    photo: doc9,
                    moneyConsult: '1200',
                    valuta: rubliConsult
                },

            ],

            buttonDoctorVisit: {
                buttonDoctorVizitZapis: 'Посмотреть запись',
                buttonResolution: 'Посмотреть постановление'
            },

            balanceData: [
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
                    money: 4640,
                    data: '10.03.2021',
                    text: 'Пополнение'

                },
                {
                    status: "all",
                    image: img2,
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
                    image: img2,
                    money: -2249,
                    data: '10.03.2021',
                    text: 'Оплата за консультацию'

                },

            ],
        },
    },
    EN: {
        translation: {
            //Header---------------------------------------------------------------------------------------------------------------------------------------------------
            header_text_first: 'How to use?',
            header_text_second: 'My notes',
            header_text_third: 'Appointment with a doctor',
            profile_photo_name: 'Artem Sviridov',

            //Mian-----------------------------------------------------------------------------------------------------------------------------------------------------
            mianConsultText: 'Online consultations from',
            mianConsultText2: 'specialist doctors 24/7',
            main_text: <p>
                Consult <b>now</b> or by <b>pre-registration</b> from your computer or using our application, available in
                <b className='blue_text'>App Store</b> and <b className='blue_text'>Google Play</b>
            </p>,
            mianButtonZapis: 'Sign up',
            mianButtonHowWorks: 'How it works?',

            //Main2--------------------------------------------------------------------------------------------------------------------------------------------------------
            buttonMyNotes: 'My notes',
            buttonMain2filter1: 'Upcoming',
            buttonMain2filter2: 'Past',
            buttonMain2filter3: 'Canceled',

            //footer--------------------------------------------------------------------------------------------------------------------------------------------------------
            onlinConsultText: 'Online consultations of specialist doctors, what this service offers.',
            onlinConsultText2: 'In our web and mobile application you will find expert doctors who will provide you with personalized care online 24/7',
            linkHowToUse: 'How to use',
            linkFAQ: 'FAQ (answers to questions)',
            linkDoctor: 'For doctors',
            linkService: 'About the service',
            linkContact: 'Contacts',
            linkUser: 'Terms of use',

            //footerAbout---------------------------------------------------------------------------------------------------------------------------------------------------
            textCityAdres: 'Moscow city. st., Lenina 54, office 51',
            textDayJob: 'Mon-Sun from 09:00 to 18:00',

            //balancePage---------------------------------------------------------------------------------------------------------------------------------------------------
            headerTextBalance: 'Balance',
            historyBalance: 'Payment history',
            buttonBalance: 'Top up your account',
            buttonDayBalance: 'For today',
            buttonMonthBalance: 'Per month',
            buttonAllBalance: 'During all this time',

            dataDoctor: [
                {
                    id: 1,
                    data: '01 Mart 2024',
                    time: '09 : 00',
                    text: 'Call Camera',
                    logo: [chat_logo, calendar_logo, clock_logo, camera],
                    status: 1,
                    statusText: 'Planned',
                    name: 'Olga Nikitina',
                    experience: '15 years of experience',
                    profession: 'Pediatrician',
                    photo: doc1,
                    moneyConsult: '900',
                    valuta: rubliConsult

                },
                {
                    id: 2,
                    data: '09 Mart 2021 ',
                    time: '19 : 00',
                    text: 'Chat',
                    logo: [chat_logo, calendar_logo, clock_logo, camera],
                    status: 2,
                    statusText: 'Held',
                    name: 'Lara Nikitina',
                    experience: '10 years of experience',
                    profession: 'Otorhinolaryngologist (ENT), Therapist',
                    photo: doc2,
                    moneyConsult: '500',
                    valuta: rubliConsult

                },
                {
                    id: 3,
                    data: '09 Mart 2021 ',
                    time: '19 : 00',
                    logo: [chat_logo, calendar_logo, clock_logo, camera],
                    text: 'Chat',
                    status: 3,
                    statusText: 'Canceled',
                    name: 'Alla Nikitina',
                    experience: '13 years of experience',
                    profession: 'Otorhinolaryngologist (ENT), Therapist',
                    photo: doc3,
                    moneyConsult: '1100',
                    valuta: rubliConsult
                },
                {
                    id: 4,
                    data: '09 Mart 2021 ',
                    time: '19 : 00',
                    text: 'Call Camera',
                    logo: [chat_logo, calendar_logo, clock_logo, camera],
                    status: 1,
                    statusText: 'Planned',
                    name: 'Alla Nikitina',
                    experience: '15 years of experience',
                    profession: 'Otorhinolaryngologist (ENT), Therapist',
                    photo: doc4,
                    moneyConsult: '800',
                    valuta: rubliConsult
                },
                {
                    id: 5,
                    data: '09 Mart 2021 ',
                    time: '19 : 00',
                    text: 'Chat',
                    logo: [chat_logo, calendar_logo, clock_logo, camera],
                    status: 2,
                    statusText: 'Held',
                    name: 'Alla Nikitina',
                    experience: '15 years of experience',
                    profession: 'Otorhinolaryngologist (ENT), Therapist',
                    photo: doc5,
                    moneyConsult: '750',
                    valuta: rubliConsult
                },
                {
                    id: 6,
                    data: '09 Mart 2021 ',
                    time: '19 : 00',
                    logo: [chat_logo, calendar_logo, clock_logo, camera],
                    text: 'Chat',
                    status: 3,
                    statusText: 'Canceled',
                    name: 'Alla Nikitina',
                    experience: '12 years of experience',
                    profession: 'Otorhinolaryngologist (ENT), Therapist',
                    photo: doc6,
                    moneyConsult: '500',
                    valuta: rubliConsult,
                },
                {
                    id: 7,
                    data: '09 Mart 2021 ',
                    time: '19 : 00',
                    text: 'Call Camera',
                    logo: [chat_logo, calendar_logo, clock_logo, camera],
                    status: 1,
                    statusText: 'Planned',
                    name: 'Alla Nikitina',
                    experience: '12 years of experience',
                    profession: 'Otorhinolaryngologist (ENT), Therapist',
                    photo: doc7,
                    moneyConsult: '600',
                    valuta: rubliConsult,
                },
                {
                    id: 8,
                    data: '09 Mart 2021 ',
                    time: '19 : 00',
                    text: 'Чат',
                    logo: [chat_logo, calendar_logo, clock_logo, camera],
                    status: 2,
                    statusText: 'Held',
                    name: 'Alla Nikitina',
                    experience: '12 years of experience',
                    profession: 'Otorhinolaryngologist (ENT), Therapist',
                    photo: doc8,
                    moneyConsult: '900',
                    valuta: rubliConsult
                },
                {
                    id: 9,
                    data: '09 Mart 2021 ',
                    time: '19 : 00',
                    logo: [chat_logo, calendar_logo, clock_logo, camera],
                    text: 'Call Camera',
                    status: 3,
                    statusText: 'Canceled',
                    name: 'Alla Nikitina',
                    experience: '12 years of experience',
                    profession: 'Otorhinolaryngologist (ENT), Therapist',
                    photo: doc9,
                    moneyConsult: '1200',
                    valuta: rubliConsult
                },
            ],

            buttonDoctorVisit: {
                buttonDoctorVizitZapis: 'View entry',
                buttonResolution: 'View the resolution'
            },

            balanceData: [
                {
                    status: "day",
                    image: visa,
                    money: 500,
                    data: '10.03.2021',
                    text: 'Replenishment'
                },
                {
                    status: "month",
                    image: img1,
                    money: 4640,
                    data: '10.03.2021',
                    text: 'Replenishment'

                },
                {
                    status: "all",
                    image: img2,
                    money: -2409,
                    data: '10.03.2021',
                    text: 'Payment for consultation'

                },
                {
                    status: "day",
                    image: visa,
                    money: 5050,
                    data: '10.03.2021',
                    text: 'Replenishment'
                },
                {
                    status: "month",
                    image: img1,
                    money: -4650,
                    data: '10.03.2021',
                    text: 'Payment for consultation'

                },
                {
                    status: "all",
                    image: img2,
                    money: -2249,
                    data: '10.03.2021',
                    text: 'Payment for consultation'

                },

            ]
        }
    }

}

export default Language;