import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div className='about' id="about">
        <div className="title">
            <h2>About Me</h2>
        </div>
        <div className="about-grid">
            <div className="about-grid-info">
                <p className="about-grid-info-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum autem at impedit consequatur veritatis ut aspernatur reiciendis 
                    obcaecati, nam deleniti magni molestias nostrum blanditiis totam suscipit cum dolor tempore! Rem.
                </p>
                <p className="about-grid-info-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt corrupti labore animi, accusantium at, sapiente quam quod eligendi maiores placeat consequatur obcaecati 
                    molestias delectus voluptates facere, consectetur harum omnis corporis.
                    <Link href="#" className='link' target='_blank'>
                      CodeWright
                    </Link>
                </p>
                <p className="about-grid-info-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quas error provident doloremque expedita rem porro, amet laborum omnis culpa.
                </p>
                <p className="about-grid-info-text">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ratione!``
                    <Link className='link' target='_blank' href="#">
                        FrontendVita,
                    </Link>
                    &nbsp;Lorem, ipsum dolor.
                    </p>
                    <p className="about-grid-info-text">
                        Lorem ipsum dolor sit amet.
                    </p>
                    <ul className="about-grid-info-list">
                        <li className='about-grid-info-list-item'>React</li>
                         <li className='about-grid-info-list-item'>React</li>
                          <li className='about-grid-info-list-item'>React</li>
                           <li className='about-grid-info-list-item'>React</li>
                            <li className='about-grid-info-list-item'>React</li>
                             <li className='about-grid-info-list-item'>React</li>
                              <li className='about-grid-info-list-item'>React</li>
                               <li className='about-grid-info-list-item'>React</li>
                                <li className='about-grid-info-list-item'>React</li>
                                 <li className='about-grid-info-list-item'>React</li>
                                  <li className='about-grid-info-list-item'>React</li>
                                   <li className='about-grid-info-list-item'>React</li>

                    </ul>
            </div>
            <div className="about-grid-photo">
                <div className="overlay"></div>
                <div className="overlay-border"></div>
                <div className="about-grid-photo-container">
                    <Image src="/asset 1.png" alt="bunny" fill/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
