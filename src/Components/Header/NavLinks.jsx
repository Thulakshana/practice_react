import React from "react";
import Menulink from "./Menulink";  // ✅ must be exactly this (same folder)

function NavLinks() {
  return (
    <>
      <Menulink linktext="home" linkurl="/" />
      <Menulink linktext="practice" linkurl="/practice" />
      <Menulink linktext="result" linkurl="/result" />
      <Menulink linktext="signup" linkurl="/signup" />
    </>
  );
}

export default NavLinks;
