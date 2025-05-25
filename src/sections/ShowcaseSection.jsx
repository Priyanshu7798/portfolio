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
              <div className='image-wrapper bg-[#08021d] rounded' >
                <a href="https://muscleaiseven.vercel.app/" target='_blank'>
                  <img src='/images/muscleAI.png' alt='muscleAi' className='object-contain w-full h-full' />
                </a>
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
                <a href="https://socialtasksnap.vercel.app/sign-in" target='_blank'>
                  <img src="/images/social.png" alt="Social Platform" />
                </a>
              </div>
              <h2> SnapGram -- Social </h2>
            </div>
            <div className='project' ref={project3Ref}>
              <div className='image-wrapper bg-[#ffe7eb]'>
                <a href="https://mockbotaiinterview.vercel.app/">
                  <img src="/images/interviewPrep.png" alt="PrepWise" />
                </a>
              </div>
              <h2>Interview Preperation </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection