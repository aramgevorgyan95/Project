import { Route, Routes } from "react-router";
import "./App.css"
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import TranslateContext from "./translateContext";
import { useState } from "react";
import HomePage from "./screens/homePage/HomePage";
import Balance from "./screens/balancePage/BalancePage";
import MyNotes from "./screens/myNotesPage/MyNotes";
import DoctorPage from "./screens/doctorPage/DoctorPage";
// import { useTranslation } from "react-i18next";








function App() {
  // const { t } = useTranslation();
  const [translatePage, setTranslatePage] = useState('RU');  //Language.ru

  // function translateRU (){
  //   setTranslatePage(Language.RU)
  // }

  // function translateEN (){
  //   setTranslatePage(Language.EN)
  // }

  return (
    <div>
      <TranslateContext.Provider value={{
        translatePage,
        setTranslatePage,
        // translateRU,
        // translateEN
      }}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctor/:id" element={<DoctorPage />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/mynotes" element={<MyNotes />} />
        </Routes>
        <Footer />
      </TranslateContext.Provider>
    </div>
  );
}

export default App;
