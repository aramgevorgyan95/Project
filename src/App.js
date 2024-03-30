import "./App.css"
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Main from "./components/Main/mian";
import Main2 from "./components/Mian2/mian_2";
import TranslateContext from "./translateContext";
import { useState } from "react";
// import language from "./translate_Ru_En";



function App() {

  const [translatePage, setTranslatePage] = useState('RU')
  return (
    <div>
      <TranslateContext.Provider value={{
         translatePage,
         setTranslatePage
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
