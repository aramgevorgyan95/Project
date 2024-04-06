import { Route, Routes } from "react-router";
import "./App.css"
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
// import Main from "./components/Main/mian";
// import Main2 from "./components/Mian2/mian_2";
import TranslateContext from "./translateContext";
import { useState } from "react";
import HomePage from "./screens/homePage/HomePage";
import DoctorPage from "./screens/doctorPage/DoctorPage";
import Balance from "./screens/balancePage/BalancePage";
import MyNotes from "./screens/myNotesPage/MyNotes";


// import Language from "./translate_Ru_En";





function App() {

  const [translatePage, setTranslatePage] = useState('RU');  //Language.ru

  // function translateRU (){
  //   setTranslatePage(Language.RU)
  // }

  // function translateEN (){
  //   setTranslatePage(Language.EN)
  // }



  // console.log(translatePage)
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
