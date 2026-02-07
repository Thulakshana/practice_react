import React from "react";
import Footerlink from "./Footerlink";

function Links() {
  return (
    <>
      <Footerlink linktextt="Admin" linkurll="/admin" />
      <Footerlink linktextt="Hr" linkurll="/hr" />
      <Footerlink linktextt="Client" linkurll="/client" />
      <Footerlink linktextt="Mama" linkurll="/mama" />
    </>
  );
}

export default Links;
