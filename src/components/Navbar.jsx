import  { useEffect, useState } from 'react'
import { navLinks } from '../../constants'

const Navbar = () => {

  const [scrolled , setScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = () =>{
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    }

    window.addEventListener('scroll',handleScroll);

    return ()=> window.removeEventListener('scroll',handleScroll);
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className='inner'>
        <a className='logo' href="#hero">
          Priyanshu Mrinal Jha
        </a>

        {/* Button Links for Different pages */}
        <nav className='desktop'>
          <ul>
            {navLinks.map(({link,name})=>(
              <li key={name} className='group'>
                <a href={link}>
                  <span>{name}</span>
                  <span className='underline' />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Page */}
        
        <a href="#contact" className='contact-btn group'>
          <div className='inner'>
            <span>
              Contact Me
            </span>
          </div>
        </a>
      </div>
    </header>
  )
}

export default Navbar