import React from 'react'
import { ReactNavbar } from 'overlay-navbar'
import logo from '../../images/logo.png'
import { FaUserAlt } from 'react-icons/fa'

function Header() {
    return (
        <ReactNavbar
            navColor1='white'
            navColor2='hsl(219,48%,8%)'
            burgerColor='hsl(250,100%,75%)'
            burgerColorHover='hsl(250,100%,75%)'
            logo={logo}
            logoWidth="250px"
            logoHoverColor="hsl(250,100%,75%)"
            nav2justifyContent='space-around'
            nav3justifyContent='space-around'
            link1ColorHover='white'
            link1Text="Home"
            link2Text="About"
            link3Text="Projects"
            link4Text="Contact"
            link1url='/'
            link2url='/about'
            link3url='/projects'
            link4url='/contact'
            link1Color='HSL(250,100%,75%)'
            link1Size='1.5rem'
            link1Padding='3vmax'
            profileIcon={true}
            ProfileIconElement={FaUserAlt}
            profileIconColor='hsl(250,100%,75%)'
            profileIconColorHover='white'
        />
    )
}

export default Header