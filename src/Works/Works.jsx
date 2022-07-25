import React from 'react'
import './Works.css'
import Group2 from '../image/Group2.png'

export default function Works() {
  return (
    <div className='works'>
      <div className='works_img'><img src={Group2} alt="" /></div>
      <div className='works_elements'>
        <div>a</div>
        <div>b</div> 
        <div>c</div>
        <div>d</div>
      </div>
    </div>
  )
}
