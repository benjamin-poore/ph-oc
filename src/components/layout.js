import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Navbar from "./navbar";

export default function layout() {
  return(
    <div className='layout'>
      <Navbar/>
    </div>
  )
}
