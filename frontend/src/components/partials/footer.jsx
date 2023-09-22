import React from 'react'
import logo from '../images/Assets/Layout/white-logo.svg'
import wave from '../images/Assets/Layout/bg-wave-1.svg'
import { Footerstyle } from './footer.style'
import arrow from '../images/Assets/Layout/icon-arrow-up.svg'


export const Footer = () => {
  return (
    <>
      <Footerstyle>
        <div className='wave'>
          <img src={wave} alt="" />
        </div>
        <footer>
          <div className='footertext'>

            <h1><img src={logo} alt="" /> Affaldsguiden</h1>
            <p>Vi arbejder for at informere om korrekt affaldssortering. Ved at sortere hjælper du os, men også klimaet.</p> <br /><br />
            <h2>©2023 Affaldsguiden. </h2>
          </div>

          <div className='totop'>
            <a href="#top">Back to top <img src={arrow} alt="" /></a>
          </div>

        </footer>
      </Footerstyle>
    </>
  )
}
