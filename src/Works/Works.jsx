import React from 'react'
import './Works.css'
import Group2 from '../image/Group2.png'

export default function Works() {
  return (
    <div className='works'>
      <div className='works_img'><img src={Group2} alt="" /></div>
      <div className='works_elements'>
        <div className='works_item item1'>Entrepreneurship</div>
        <div className='works_item item2'>Social and <br />
          Community</div>
        <div className='works_item item3'>Training <br /> and Talks</div>
        <div className='works_item item4'>Books</div>
      </div>
    </div>
  )
}
