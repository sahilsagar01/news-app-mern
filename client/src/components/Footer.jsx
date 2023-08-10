import React from 'react'

function Footer() {
    const day = new Date();
    const year = day.getFullYear();
  return (
    <div className='footerCont'>
    <h5>©Sahil Sagar {year}.</h5>
    </div>
  )
}

export default Footer;