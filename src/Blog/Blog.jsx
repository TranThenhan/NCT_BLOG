import React from 'react'
import './Blog.css'

export default function Blog() {
    return (
        <div className='blog'>
            <div className='blog_title'></div>
            <div className='blog_right'>
                <div className='blog_image'></div>
                <div className='blog_box'><b>Lorem Ipsum is simply dummy text of the printing and typesetting</b> </div>
                <div className='blog_view'>
                    <div ><i class="fa-solid fa-eye"></i> 180</div>
                    <div>Jun 14, 2022</div>
                </div>
                <div className='blog_text'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
                <button className='button_4'>VIEW DETAILS </button>
            </div>

        </div>
    )
}
