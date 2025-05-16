import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/latest.pdf'
import hero from './data/hero.json'
import Typed from "typed.js"

const Home = () => {
  const typedRef = useRef(null)
  useEffect(() => {
    const options = {
      strings: ["Web Developer", "MERN Stack Developer", "React Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      showcursor: true,
      smartBackspace: true,
      loop: true,
    }
    const typed = new Typed(typedRef.current, options)
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <div className="container home" id='home'>
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h5>Avijeet Mahal</h5>

          <h1>I'm a <span ref={typedRef}></span></h1>

          <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="Hero" />
          </div>

        </div>
      </div>
    </>
  )
}

export default Home