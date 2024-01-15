import React from 'react';

function Contact() {

  return (

    <div className="components one-second-animation" >
      <p className="p" >I'm currently looking for opportunities in the Calgary Area! Please reach out if you are looking for a hard-working and creative developer! </p><br></br>
      <div id="contact-div">
        <a href="https://github.com/BogdanConstan" rel="noopener noreferrer" target="_blank" >
          <img src={require("../media/github-icon.svg")} alt='' className="contact-icons" />
        </a><br></br>
        <a href="https://www.linkedin.com/in/bogdan-constan/" rel="noopener noreferrer" target="_blank" >
          <img src={require("../media/linkedin-icon.svg")} alt='' className="contact-icons" />
        </a><br></br>
        <a href="https://dev.to/ionab" rel="noopener noreferrer" target="_blank" >
          <img src={require("../media/dev.to-icon.svg")} alt='' className="contact-icons" />
        </a><br></br>
        <a href={`mailto:bogdan.constan@gmail.com`} >
          <img src={require("../media/contact-icon.svg")} alt='' className="contact-icons" />
        </a><br></br>
      </div>
    </div>
    
  );
  
}

export default Contact;