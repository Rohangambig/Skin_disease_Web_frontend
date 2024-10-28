import React from 'react'


import './index.css'

export default function Index() {
  return (
    <div className='chat-container'>
        <div className='reciever-lists'>
            <form>
                <input type='text' placeholder='search your freind name...'></input>
            </form>

            <ul className='each-friend'>
                <li>
                    <img src='https://imgs.search.brave.com/8asUjCKESbvc3leNSQI-4zrpWVZ6esGB-THFGzBmiZI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzY0LzY3LzUy/LzM2MF9GXzY0Njc1/MjA5Xzd2ZTJYUUFO/dXp1SGpNWlhQM2FJ/WUlwc0RLRWJGNWRE/LmpwZw' alt='profile-img'></img>
                    <span>dmns</span>
                </li>
                <li>dmns</li>
                <li>dmns</li>
                <li>dmns</li>
            </ul>
        </div>

        <div className='message-room'></div>
    </div>
  )
}
