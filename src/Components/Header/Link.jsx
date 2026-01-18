import React from 'react'
import Menulink from './Menulink'

function Link() {
  return (
    <>
    <Menulink linktext="home" linkurl="/" />
    <Menulink linktext="practice" linkurl="/practice" />
    <Menulink linktext="result" linkurl="/result" />
    <Menulink linktext="signup" linkurl="/signup" />

    </>
  )
}

export default Link