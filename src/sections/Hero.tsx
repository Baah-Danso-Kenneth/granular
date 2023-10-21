import { Button } from '@/components/Button'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='hero'>
        <h1 className="hero-title">
            Hi my name is
        </h1>
      <h2 className="hero-title-large">Kenneth Baah Danso</h2>
      <h3 className="hero-title-large hero-title-sub">
        I Craft thing for the web
      </h3>
      <p className="hero-text">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deleniti, dolor doloremque quis dolorum corporis, amet in atque animi quae
          asperiores? Amet soluta quods.
        <Link href='#' target='_blank' className='link'>
         CodeWright
        </Link>
      </p>
      <div className="hero-button">
        <Button text="Check out my projects" link='#'/>
      </div>
    </div>
  )
}

export default Hero
