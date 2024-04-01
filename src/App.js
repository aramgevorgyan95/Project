import "./App.css"
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Main from "./components/Main/mian";
import Main2 from "./components/Mian2/mian_2";
import TranslateContext from "./translateContext";
import { useState } from "react";

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
        <Main />
        <Main2 />
        <Footer />
      </TranslateContext.Provider>

    </div>
  );
}

export default App;
