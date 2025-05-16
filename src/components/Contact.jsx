import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa"
import { MdMailOutline } from "react-icons/md";
const Contact = () => {
  return (
    <>
    <div className="container contact" id='contact'>
      <h1>CONTACT ME</h1>
      <div className="contact-icon"  data-aos="zoom-in-up" data-aos-duration="1000">
        <a href='https://www.linkedin.com/in/avijeet-mahal-6ab02a224/' target='_blank' className="items">
          <FaLinkedinIn className='icons'/>
        </a>
        <a href='https://github.com/AvijeetMahal' target='_blank' className="items">
          <FaGithub className='icons'/>
        </a>
        <a href='mailto:mahalavijeet5@gmail.com' target='_blank' className="items">
          <MdMailOutline className='icons'/>
        </a>
      </div>
    </div>
    </>
  )
}

export default Contact