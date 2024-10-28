import React from 'react';
import aiBot from '../allImages/ai-bot.png';
import doctors from '../allImages/doctos.png'

import './Index.css';


export default function Index() {
  return (
    <div className='first-container'>

    <img src={aiBot} alt='bot-image' className='bot-image'></img>

        <nav className='nav'>
            <span>Logo</span>
            <ul>
                <li>Product</li>
                <li>Solutions</li>
                <li>Login</li>
                <li>Signup</li>
            </ul>
        </nav>

        <div className='content-container'>
            <h1>Skills speak louder than words</h1>

            <p>We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.</p>

            <div className='first-container-button'>
                <button>Login</button>
                <button>Signup</button>
            </div>

        </div>

    </div>
  )
}
