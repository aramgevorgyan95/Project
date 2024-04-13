import  i18n  from "i18next";
import { initReactI18next } from "react-i18next";
import LngDedector from 'i18next-browser-languagedetector';
import Language from "../translate_Ru_En";

i18n.use(LngDedector).use(initReactI18next).init({
    fallbackLng: 'RU',
    resources: {
        RU: Language.RU,
        EN: Language.EN
    }
})

export default i18n;