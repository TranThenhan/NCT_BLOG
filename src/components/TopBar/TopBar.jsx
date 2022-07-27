import React from 'react'
import './TopBar.css'

export default function TopBar() {
  return (
    <div className='top'>
        <div className="topleft">NCT</div>
        <div className="topcenter">
            <ul className='topList'>
                <li className='topListItem'>Home</li>
                <li className='topListItem'>About Me</li>
                <li className='topListItem'>My Works</li>
                <li className='topListItem'>Events</li>
                <li className='topListItem'>Blog</li>
            </ul>
        </div>
        <div className="topright">LogIn</div>
      
    </div>
  )
}
