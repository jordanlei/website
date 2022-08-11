import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import { StaticImage } from 'gatsby-plugin-image'

class Art extends Component {
  render(){

  return (
    <section id = "art">
      <div className="section" style={{paddingBottom: 2+"%"}}>            
      <Fade><h1>Art</h1></Fade>
      <StaticImage src="../images/next.png" style={{marginLeft: "12px", marginTop: "-3px", height: "40px", width: "40px"}} alt = ""/>
    </div>
    </section>
  )
  }
}

export default Art