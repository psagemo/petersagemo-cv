import { useState } from 'react'
import './App.css'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'


// Main js app that sets language and passes language state to all other components
function App() {
  
  // Set language and setter state
  const [lang, setLang] = useState({ eng: true, swe: false })

  // Toggle language functionality
  let handleLang = (e) => {
      e.preventDefault();
      if( e.target.className == "eng" ){
          setLang({ eng: true, swe: false })
      }
      else if( e.target.className == "swe" ){
          setLang({ eng: false, swe: true })
      }
  }

  // English template
  if ( lang.eng === true ) {
    return (
      <div className='main-container'>
      <div className="lang-container">
        <div className="lang-select">
          <div className="eng" id="eng-active" onClick={handleLang}></div>
          <div className="swe" id="swe-disabled" onClick={handleLang}></div>
        </div>
      </div>            
        <div className="main-content">
          <LeftSection l={lang}/>
          <RightSection l={lang}/>
        </div>
      </div>    
    );
  }

  // Swedish template
  else if ( lang.swe === true ) {
    return (
      <div className='main-container'>
        <div className="lang-container">
          <div className="lang-select">
            <div className="eng" id="eng-disabled" onClick={handleLang}></div>
            <div className="swe" id="swe-active" onClick={handleLang}></div>
          </div>
        </div>                            
        <div className="main-content">
          <LeftSection l={lang}/>
          <RightSection l={lang}/>
        </div>
      </div>    
    );
  }
}

export default App;
