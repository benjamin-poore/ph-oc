import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Navbar from "./navbar";
import {
  Container
} from 'react-bulma-components';

export default function layout({ children }) {
  return (
    <div className='layout'>
      <Navbar />
      <Container>
        {children}
      </Container>

    </div>
  )
}
