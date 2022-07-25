import React from 'react'
import './About.css'
import group5 from '../image/Group5.png'

export default function About() {
    return (
        <div className='about'>
            <div className='about_image'>
                
            </div>
            <div className='about_center'> <img src={group5} alt="" /></div>
            <div className='about_info'>
                <div className='about_head'>
                    About
                </div>
                <div className='about_name'><b>Nguyen Chi Thanh</b></div>

                <div className='about_context'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </div>
                <button className='button_1'>VIEW DETAILS</button>
                <button className='button_2'>DOWLOAD CV</button>
            </div>
        </div>
    )
}
