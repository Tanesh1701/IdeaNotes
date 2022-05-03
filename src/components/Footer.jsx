import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made By Tanesh in {year}</p>
    </footer>
  );
}

export default Footer;
