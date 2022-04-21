import * as React from 'react';
import Logo from '../components/logo'
import Nav from '../components/navbar'
import Layout from '../components/layout'
import "./mystyles.scss"
import { StaticImage } from 'gatsby-plugin-image'
import welcome from "../images/welcome.png"
// import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout>
      <div className='column is-half is-offset-one-quarter'>
        <img className=''
          src={welcome}
          alt="Welcome to Potter's House" />
      </div>

    </Layout>
  )
}

export default IndexPage;