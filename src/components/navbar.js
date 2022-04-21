
import { StaticImage } from 'gatsby-plugin-image'
// import classNames from 'classnames'
// import { FaBars } from 'react-icons/fa';
import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import classNames from 'classnames'
import {
  Navbar,
  Section,
  Container
} from 'react-bulma-components';


const NavBar1 = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(true)
 
  const toggleAboutDropdown = () => {
    setAboutOpen(!aboutOpen);
  }

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  }

  const closeHamburger = () => {
    setHamburgerOpen(false);
  } 

  const data = useStaticQuery(graphql`
    query {
      keystone {
        logos {
          image {
            url
          }
        }
      }
    }
  `)

  return (
      <Navbar className='is-light'>
        <Navbar.Brand>
            <Navbar.Item href="/" onClick={() => closeHamburger()}>
              <StaticImage
                alt="Potter's House logo"
                src="http://154.53.63.196:3000/images/7a8cee51-dae9-4243-8a8a-0217ea30e879.webp"
              />
              <div className="pl-2 logo-text is-align-self-center is-justify-content-center line-height-0">
                <div className="has-text-weight-bold">&nbsp; &nbsp; THE</div>
                <div className="has-text-weight-bold is-size-3 secondary-logo-text"> Potter's House</div>
                <div className=''> Christian Fellowship Church</div>
              </div>
            </Navbar.Item>
          <Navbar.Burger className="is-size-3" onClick={toggleHamburger} />
        </Navbar.Brand>
        <Navbar.Menu className={`${hamburgerOpen ? " is-block" : " is-hidden-mobile"}`}>
          <Navbar.Container>
          <Navbar.Item href="/" onClick={() => closeHamburger()}>Home</Navbar.Item>
            <Navbar.Item dropdown hoverable href="#" onClick={toggleAboutDropdown}>
            <Navbar.Link>About</Navbar.Link>
              <Navbar.Dropdown className={`${aboutOpen ? " is-block-mobile" : " is-hidden-mobile"}`}>
                <Navbar.Item href="#">Our Vision</Navbar.Item>
                <Navbar.Item href="#">What We Believe</Navbar.Item>
                <Navbar.Item href="#">Our Staff</Navbar.Item>
                <Navbar.Item href="#">Service Times</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
            <Navbar.Item href="/about" onClick={() => closeHamburger()}>Location</Navbar.Item>
            <Navbar.Item href="/about" onClick={() => closeHamburger()}>Events</Navbar.Item>
            <Navbar.Item href="/about" onClick={() => closeHamburger()}>Contact</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
  )
}


export default NavBar1