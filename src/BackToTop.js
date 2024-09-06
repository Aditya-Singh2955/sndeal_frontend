import React from 'react'
import "./BackToTop.css"

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: adds smooth scrolling effect
    });
  };

const BackToTop = () => {
  return (
    <div onClick={scrollToTop} className='BackToTop'>
        Back To Top
    </div>
  )
}

export default BackToTop