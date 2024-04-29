// M1.jsx
import React, { useContext } from 'react';
import './M1.css'; // Importing the CSS file
import { Context } from '../../Context/Context';

const M1 = () => {

const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src='src/assets/user.png' alt='' />
      </div>
      <div className="names">
      <div className="container">
        
        {!showResult
        ?
      <>
       <div className="greet">

<p><span>Hello, Garima</span></p>
<p>How can i help you today?</p>
</div>
<div className="cards">
<div className="card">
  <p>suggest beautiful Places nearby</p>
  <img src='src/assets/compass.png' alt=''></img>
</div>
<div className="card">
  <p>Summarize the concept:Urban Planning</p>
  <img src='src/assets/bulb1.png' alt=''></img>
</div>
<div className="card">
  <p>Activites for work retreat</p>
  <img src='src/assets/message.png' alt=''></img>
</div>
<div className="card">
  <p>Improve Readability of the code</p>
  <img src='src/assets/codeicon.png' alt=''></img>
  </div>
</div>
      </>:<div className='result'>
        <div className="resulttitle">
          <img src='src/assets/user.png' alt=""></img>
          <p>{recentPrompt}</p>
        </div>
        <div className="result-data">
          <img src='src/assets/gemini.png' alt=''></img>
          {loading ? <div className='loader'>
            <hr />
            <hr />
            <hr />
          
            </div>
          :<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
        </div>
        </div>}
        </div>
          <div className="main-bottom">
            <div className="search-box">
              <input onChange={(e)=>setInput(e.target.value)}value={input}type="text" placeholder='Enter a prompt here'/>
              <div>
                <img src="src/assets/gallery.png" alt="" />
                <img src="src/assets/mic.png" alt="" />
                {input ?<img onClick={()=>onSent()} src="src/assets/send.jpg" alt="" />:null}
              </div>
            </div>
            <p className='Bottom-info'>
              There may be some inaccurate info.But Gemini will try best to give the best info.So pls check again.
            </p>
          </div>
        </div>
        </div>
        
      
    
  );
}

export default M1;
