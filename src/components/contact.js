import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import { StaticImage } from 'gatsby-plugin-image'
import {Link} from "gatsby"


class Contact extends Component {
  render(){

  const items = [
    {logo: <StaticImage src="../images/experience/logo-linkedin.png" height = {60} style={{marginRight: "3vw"}} alt = ""/>,
      link: "https://www.linkedin.com/in/jordan-lei-782890130/"},
    {logo: <StaticImage src="../images/experience/logo-fb.png" height = {60} style={{marginRight: "3vw"}} alt = ""/>, link: "https://www.facebook.com/jordan.lei.77"},
    {logo: <StaticImage src="../images/experience/logo-insta.png" height = {60} style={{marginRight: "3vw"}} alt = ""/>, link: "https://www.instagram.com/leijordanart/"},
    {logo: <StaticImage src="../images/experience/logo-twitter.png" height = {60} style={{marginRight: "3vw"}} alt = ""/>, link: "https://twitter.com/NeuroLei"},
    {logo: <StaticImage src="../images/experience/logo-medium.png" height = {60} style={{marginRight: "3vw"}} alt = ""/>, link: "https://jordanlei.medium.com/"},
  ]
  
  var cards = items.map((i)=>{
    return <Col className="contact-icon">
      <a href={i.link} target="_blank">
        {i.logo}
      </a>
    </Col>
  })

  return (
    <section id = "contact">
      <div className="dark section" style={{paddingBottom: 10+"%"}}>            
      <Fade><h1>CONTACT</h1></Fade>
      <p>
        Let's get in touch!<br/>
        Email: jordanlei dot work at gmail dot com
      </p>
      <Row>{cards}</Row>
      </div>
    </section>
  )
  }
}

export default Contact