import React from 'react'
import "./MailList.css"

function MailList() {
  return (
    <div className='mail'>
        <h1 className="mailTitle">Save time,save money!</h1>
        <span className="mailDesc"></span>
        <div className="mailInputContainer">
            <input type="text" placeholder='Your Email' />
            <button>Subsrcibe</button>
        </div>
    </div>
  )
}

export default MailList