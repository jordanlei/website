import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import "../css/welcome.css"
import Fade from 'react-reveal';

class Contact extends Component {
  
  render() {
    const items = [
      {logo: require('../images/logo-linkedin.png'), link: "https://www.linkedin.com/in/jordan-lei-782890130/"},
      {logo: require('../images/logo-fb.png'), link: "https://www.facebook.com/jordan.lei.77"},
      {logo: require('../images/logo-insta.png'), link: "https://www.instagram.com/leijordanart/"},
      {logo: require('../images/logo-twitter.png'), link: "https://twitter.com/leijordan98"},
      {logo: require('../images/logo-medium.png'), link: "https://jordanlei.medium.com/"},
    ]
  
    var cards = items.map((i)=>{
      return <span className="contact-icon">
        <a href={i.link} target="_blank">
          <img src = {i.logo} width="60" height="60" style={{marginRight: "3vw"}}/>
        </a>
      </span>
    })

    return (
      <div className="dark-container" style={{paddingBottom: "8%"}}>            
        <Fade><h1>CONTACT</h1></Fade>
        <p>
        <b>If you thought that was fun, let's get in touch!</b> <br/>
        Email me at jordanlei dot work at gmail dot com
        </p>
        {cards}
      </div>
    );
  }
}

export default Contact;
