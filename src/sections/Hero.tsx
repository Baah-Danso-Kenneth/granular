import { Button } from '@/components/Button'
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion';

function Hero() {
  return (
    <div className='hero'>
        <h1 
        className="hero-title" >
            Hi my name is
        </h1>
      <h2 className="hero-title-large">Kenneth Baah Danso</h2>
      <h3 className="hero-title-large hero-title-sub">
        I Craft thing for the web
      </h3>
      <p className="hero-text">
        a passionate full-stack developer dedicated to crafting seamless and dynamic web experiences. With a keen eye for detail and a love for coding, I bring creativity and precision to every project I undertake 
      </p>
      <div className="hero-button">
        <Button text="Check out my projects" link='#'/>
      </div>
    </div>
  )
}

export default Hero
