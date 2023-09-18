import React from 'react'
import logo from '../images/Assets/Layout/white-logo.svg'
import wave from '../images/Assets/Layout/bg-wave-1.svg'
import { Footerstyle } from './footer.style'


export const Footer = () => {
  return (
    <>
      <Footerstyle>
        <img src={wave} alt="" />
        <footer>
          <img src={logo} alt="" />
          <h4>Affaldsguiden</h4>
          <p>Vi arbejder for at informere om korrekt affaldssortering. Ved at sortere hjælper du os, men også klimaet.</p>
          <h5>©2023 Affaldsguiden. </h5>
        </footer>
      </Footerstyle>
    </>
  )
}
