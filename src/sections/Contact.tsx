import { Button } from '@/components/Button'
import React from 'react'

function Contact() {
  return (
    <div className='contact' id='contact'>
      <h2 className='contact-title'> What &apos;s Next?</h2>
      <h2 className='contact-sub-title'>Get in Touch</h2>
      <p className="contact-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet earum perferendis suscipit illo accusantium dolor?
      </p>

      <div className="contact-cta">
        <Button text="Say hello" link="mailto:kwadwobaahdanso@gmail.com"/>
      </div>
    </div>
  )
}

export default Contact
