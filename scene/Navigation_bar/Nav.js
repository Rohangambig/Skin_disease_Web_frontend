import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navigate.css';


import ChatBot from '../ChatBot/Index'

export default function Nav() {
  const navigate = useNavigate();
  const [showBot,setshowBot] = useState(false);

  return (
    <div>
      {showBot && (<div onClick={()=>{setshowBot(false)}}><i className='bx bx-x' id='close'></i></div>)}
      {showBot && <ChatBot></ChatBot>}

      <nav className='navigation-bar'>
        <h1>Logo</h1>
        <ul>
          <li id='active'>Home</li>
          <li onClick={() => (setshowBot(true))}>Bot</li>
          <li onClick={()=> {navigate('/chat')}}>Chats</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  )
}
