import React, { useEffect, useState } from 'react'

function Experience() {
    const [selected, setSelected]=useState(0)
    
    useEffect(()=>{
        const transformedSelected=()=>{
            const underline = document.querySelector<HTMLElement>('.underline');
            underline!.style.top = `${selected * 2.5}rem`
        };
        transformedSelected();
    }, [selected])

    const experiences=[
        {name:"KoletSpace", 
        role:"Frontend Developer",
         start:'January 201',
          end:'present',
           shortDescription:[
            "I had experience working on a large codebase utilizing Kibaba and Elasticsearc",
            "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, Typescript",
            "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, Typescript",
            "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, Typescript"

        ]},

      {name:"BestQuote", 
        role:"FullStack Developer",
         start:'January 201',
          end:'present',
           shortDescription:[
            "I had experience working on a large codebase utilizing Kibaba and Elasticsearc",
            "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, Typescript",
            "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, Typescript",
            "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, Typescript"

        ]},

       {name:"Bloomberg", 
        role:"Mobile Developer",
         start:'January 201',
          end:'present',
           shortDescription:[
            "I had experience working on a large codebase utilizing Kibaba and Elasticsearc",
            "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, Typescript",
            "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, Typescript",
            "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, Typescript"

        ]},

        {name:"Amalitech", 
        role:"Frontend Developer",
         start:'January 201',
          end:'present',
           shortDescription:[
            "I had experience working on a large codebase utilizing Kibaba and Elasticsearc",
            "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, Typescript",
            "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, Typescript",
            "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, Typescript"

        ]},

       {name:"KoletSpace", 
        role:"UI/UX DEveloper",
         start:'January 201',
          end:'present',
           shortDescription:[
            "I had experience working on a large codebase utilizing Kibaba and Elasticsearc",
            "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, Typescript",
            "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, Typescript",
            "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, Typescript"

        ]},

        
    ]
  return (
    <div className='experience' id='experience'>
        <div className="title">
          <h2>Where I&apos;ve Worked</h2>
        </div>
        <div className="container">
            <ul className="exp-slider">
                <div className="underline"></div>
                {experiences.map((experience,index)=>(
                  <li key={index} 
                  className={`exp-slider-item ${index === selected && 'exp-slider-item-selected'}`}
                  onClick={()=>setSelected(index)}
                  >
                    <span>{experience.name}</span>
                  </li>
                ))}
            </ul>

            <div className="exp-details">
                <div className="exp-details-position">
                    <h3>
                        <span>{experiences[selected].role}</span>
                        <span className="exp-details-position-company">
                            &nbsp;@&nbsp;
                            <p className='link'>{experiences[selected].name}{" "}</p>
                        </span>
                    </h3>
                    <p className="exp-details-range">
                        {experiences[selected].start} - {experiences[selected].end}
                    </p>
                    <ul className="exp-details-list">
                        {
                            experiences[selected].shortDescription.map((description, index)=>(<li key={index} className='exp-details-list-item'>{description}</li>))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience

