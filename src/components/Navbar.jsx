import React,{useState,useEffect} from 'react'
import {navLinks} from '../constants/index.js'

const Navbar = () => {
    const [scrolled,setScrlled]=useState(false)
    useEffect(()=>{
        const handleScroll=()=>{
            const isScrolled=window.scrollY>10;
            setScrlled(true);
        }
        window.addEventListener('scroll',handleScroll)
        return ()=>window.removeEventListener('scroll',handleScroll);
    },[])
  return (
    <header className={`navbar ${scrolled?'scrolled':'not-scrolled'}`}>
        <div className="inner">
            <a href="#hero" className="logo">
                Karan.io
            </a>
            <nav className="desktop">
<ul>
    {
        navLinks.map(({link,name})=>(
            <li key={name} className='group'>
                <a href={link}>
                    <span>{name}</span>
                    <span className='underline'></span>
                </a>
            </li>
        ))
    }
</ul>
            </nav>
            <a href="#contact" className="contact-btn group">
                <div className="inner">
                    <span>Contact me</span>
                </div>
            </a>
        </div>

    </header>
  )
}

export default Navbar