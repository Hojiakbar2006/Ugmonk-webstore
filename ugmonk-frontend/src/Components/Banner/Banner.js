import React from 'react'
import './Banner.css'
import bannerImg from '../../Assets/Images/Banner.png'

export default function Banner() {
  return (
    <div id='banner'>
      <img src={bannerImg} alt="banner" />
    </div>
  );
}
