import React from "react";

function Footer () {
var CurYear = new Date ().getFullYear();
  return (
  <footer>
    <p>Copyright @ {CurYear} </p>
  </footer>
  );
}
export default Footer;