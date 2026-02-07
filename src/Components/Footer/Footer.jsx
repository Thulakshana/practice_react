import React from 'react'
import Links from "./Links";
import { Link } from 'react-router-dom'

function Footer(props) {
  return (
   <>
  <Links />
      {props.children}
   </>
  )
}

export default Footer