import { useRef } from 'react'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {

  const sectionRef = useRef(null);

  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(()=>{
    const projects = [project1Ref.current , project2Ref.current, project3Ref.current];

    gsap.fromTo(
      sectionRef.current,
      {opacity: 0},
      {opacity: 1 , duration: 1.5}
    )

    projects.forEach((card,index)=>{
      gsap.fromTo(
        card,
        {
          y:50, opacity : 0
        },{
          y:0, opacity: 1,
          duration: 1,
          delay: 0.2 * (index+1),
          scrollTrigger : {
            trigger: card,
            start: 'top bottom-=100'
          }
        }
      )
    })
  },[])


  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          {/* left side */}
            <div className='first-project-wrapper' ref={project1Ref}>
              <div className='image-wrapper'>
                <img src='/images/project1.png' alt='Ryde' />
              </div>
              <div className='text-content'>
                <h2>Expert-designed workout and diet plans, tailored just for you—accessible anytime at your fingertips.</h2>
                <p className='text-white-50 md:text-xl'>An AI app built with Next Js and Convex as its database,TailwindCSS for design</p>
              </div>
            </div>
          {/* right side */}
          <div className='project-list-wrapper overflow-hidden'>
            <div className='project' ref={project2Ref}>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img src="/images/project2.png" alt="Library Management" />
              </div>
              <h2> Library Managemnet </h2>
            </div>
            <div className='project' ref={project3Ref}>
              <div className='image-wrapper bg-[#ffe7eb]'>
                <img src="/images/project3.png" alt="YC Directory" />
              </div>
              <h2>YC Directory </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection