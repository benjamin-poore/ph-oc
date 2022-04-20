import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import classNames from 'classnames'
import { FaBars } from 'react-icons/fa';

import {
  logoSizing,
  logoText,
  flex,
  large,
  bold,
  secondaryLogoText,
  pl2,
  alignSelfCenter,
  spaceBetween,
  nav,
  navItem,
  hamburger
} from './layout.module.css'



const Logo = () => {
  const boldLargeSecondary = classNames(bold, large, secondaryLogoText);
  const paddingLogoText = classNames(logoText, pl2, alignSelfCenter)
  const navDesktop = classNames(spaceBetween, nav)
  const boldNavItem = classNames(bold, navItem)
  const hamburgerMenu = classNames(alignSelfCenter, pl2, large, hamburger)
  

  return (
    <nav>
      <div className={flex}>
        <StaticImage
          className={logoSizing}
          alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
          src="../images/PottersHouseLogo.jpg"
        />
        <div className={paddingLogoText}>
          <div className={bold}>&nbsp; &nbsp; THE</div>
          <div className={boldLargeSecondary}> Potter's House</div>
          <div className=''> Christian Fellowship Church</div>
        </div>

        <div className={hamburgerMenu}>
        <FaBars />
        </div>

      </div>
      <div className={navDesktop}>
        <div className={boldNavItem}><a class="active" href="#home">Home</a></div>
        <div className={boldNavItem}><a href="#news">News</a></div>
        <div className={boldNavItem}><a href="#contact">Contact</a></div>
        {/* <li style="float:right"><a href="#about">About</a></li> */}
      </div>
    </nav>
  )
}

export default Logo