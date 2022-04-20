
import { StaticImage } from 'gatsby-plugin-image'
// import classNames from 'classnames'
// import { FaBars } from 'react-icons/fa';
import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import classNames from 'classnames'
import {
  Navbar,
  Section
} from 'react-bulma-components';


const NavBar1 = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
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
    <Section>
      <Navbar>
        <Navbar.Brand>
          <Link><Navbar.Item>

            <StaticImage
              alt="Potter's House logo"
              src="http://154.53.63.196:3000/images/7a8cee51-dae9-4243-8a8a-0217ea30e879.webp"
            />
            <div className="pl-2 logo-text is-align-self-center is-justify-content-center line-height-0">
              <div className="has-text-weight-bold">&nbsp; &nbsp; THE</div>
              <div className="has-text-weight-bold is-size-3 secondary-logo-text"> Potter's House</div>
              <div className=''> Christian Fellowship Church</div>
              <div>{"http://154.53.63.196:3000/images/7a8cee51-dae9-4243-8a8a-0217ea30e879.webp"}</div>
            </div>

          </Navbar.Item></Link>
          <Navbar.Burger onClick={toggleHamburger} />
        </Navbar.Brand>
        <Navbar.Menu className={`${hamburgerOpen ? " is-block" : " is-hidden"}`}>
          <Navbar.Container>
            <Navbar.Item dropdown hoverable href="#">
              <Navbar.Link>First</Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item href="#">Subitem 1</Navbar.Item>
                <Navbar.Item href="#">Subitem 2</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
            <Navbar.Item href="#">Second</Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item href="#">At the end</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    </Section>
  )
}


export default NavBar1