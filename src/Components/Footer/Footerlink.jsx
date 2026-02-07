import React from "react";
import { Link } from "react-router-dom";

function Footerlink(props) {
  return (
    <>
      <Link to={props.linkurll}>{props.linktextt}</Link>
    </>
  );
}

export default Footerlink;
