import React, { useContext, useState } from 'react';
import './Sidebar.css';
import  {Context } from '../../Context/Context';



export const Sidebar = () => {
  const [extended, setextended] = useState(false);
  const {onSent,previousPrompt,setRecentPrompt,newChat}=useContext(Context)
  const loadPrompt=async(prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }
  return (
    <div className='sidebar'>
      <div className='top'>
        <img onClick={()=>setextended(prev=>!prev)}className='menu' src='src/assets/menu.png' alt="menu bar"></img>
        <div onClick={()=>newChat()}className="new-chat">
          <img src="src/assets/plus.png" alt=""></img>
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ?
         <div className="recent">
          <p className="recent-title">Recent</p>
         { previousPrompt.map((item,index)=>{
          return(
            <div onClick={()=>loadPrompt(item)}className="recent-entry" >
            <img src="src/assets/message.png" alt=""></img> 
           <p>{item.slice(0,18)}...</p>
            </div>
          )

         })

         }
          
             </div> : null}
            

      </div>
      <div className='bottom'>
        <div className="botton-item recent-entry">
          <img src='src/assets/question.png' alt=''></img>
          {extended?<p>Help</p>:null}
        </div>
        <div className="botton-item recent-entry">
          <img src='src/assets/history.png' alt=''></img>
          {extended?<p>Activity</p>:null}
        </div>
        <div className="botton-item recent-entry">
          <img src='src/assets/setting.jpg' alt=''></img>
          {extended?<p>Settings</p>:null}
        </div>
      </div>
    </div>
    

  );
};
