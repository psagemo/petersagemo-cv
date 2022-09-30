
import { useState } from 'react'
import './App.css'
import LangSelect from './components/LangSelect'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'

function App() {

  const [lang, setLang] = useState({ eng: true, swe: false })

  let handleLang = (e) => {
      e.preventDefault();
      if( e.target.className == "eng" ){
          setLang({ eng: true, swe: false })
      }
      else if( e.target.className == "swe" ){
          setLang({ eng: false, swe: true })
      }
  }

  console.log(lang);

  if ( lang.eng === true ) {
    console.log("eng")
    return (
      <div className='main-container'>
      <div className="lang-container">
        <div className="lang-select">
          <div className="eng" id="eng-active" onClick={handleLang}></div>
          <div className="swe" id="swe-disabled" onClick={handleLang}></div>
        </div>
      </div>            
        <div className="main-content">
          {/* <LangSelect /> */}
          <LeftSection l={lang}/>
          <RightSection l={lang}/>
        </div>
      </div>    
    );
  }
  else if ( lang.swe === true ) {
    console.log("swe")
    return (
      <div className='main-container'>
        <div className="lang-container">
          <div className="lang-select">
            <div className="eng" id="eng-disabled" onClick={handleLang}></div>
            <div className="swe" id="swe-active" onClick={handleLang}></div>
          </div>
        </div>                            
        <div className="main-content">
          {/* <LangSelect />  */}
          <LeftSection l={lang}/>
          <RightSection l={lang}/>
        </div>
      </div>    
    );
  }

  
}

export default App;
