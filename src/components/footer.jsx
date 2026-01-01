import React from 'react';
import './Footer.css';
import { useState } from "react";
const Footer = () => {

  const [showmessage, setMessage] = useState("");

  const handleClick = () => {
    alert("Button clicked!");
    setMessage("This message is shown under the button");
  };
  return (
    <footer className="footer">
     <button type="button" className="btn btn-outline-warning" onClick={handleClick}>Warning</button>
      <p>{showmessage}</p>
      <p>The Footer</p>
    </footer>
  );
};
export default Footer;
