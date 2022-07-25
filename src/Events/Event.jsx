import React from 'react'
import './Event.css'
import Frame4 from '../image/Frame 4.png'
import Frame29 from '../image/Frame 29.png'

export default function Event() {
    return (
        <div className='event'>
            <div className='event_title'>Events</div>
            <div className='event_box'>
                <div>
                    <div className='event_name'><b>Zone Bootcamp Kick-off Day: Innovation</b></div>

                    <div className='event_context'>Dù bạn là ai, bạn không khởi nghiệp một mình! <br />
                    <br />

                        Zone Startups Việt Nam, Ngân hàng TMCP ACB và Trường Kinh doanh Đại học Hồng Kông tự hào đồng hành cùng startups, sinh viên và người trẻ khởi nghiệp công nghệ tại cuộc thi Zone Bootcamp 2022.</div>
                    <button className='button_3'>VIEW DETAILS</button>

                </div>

                
            </div>
            <div className='event_center'> <img src={Frame4} alt="" /></div>
                <div className='event_image'>
                    <img src={Frame29} alt="" />
                </div>
        </div>

    )
}
