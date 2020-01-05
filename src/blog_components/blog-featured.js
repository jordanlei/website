import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';

class BlogFeatured extends Component {
  constructor(props){
    super(props);
    this.state = {
        featured: this.props.post
    };
  }

  render() {
    var featured = this.state.featured;
    return (
        <section id = "blog-featured">
        <div style={{paddingBottom: 2+"%", paddingLeft:"20%", paddingRight:"10%", backgroundColor: "none", height: "100vh"}}>          
            <div style={{color: 'rgba(255, 255, 255, 0.9)'}}>
            <Row>
            <Col md={3} style={{paddingTop: "25vh"}}>
            <div className= "blog-featured-description">
              <Fade bottom duration={5000}>
                <a href= {featured.link}>
                  <h4 style={{letterSpacing: "3px"}}>
                  Featured Blog:
                  </h4>
                  <h3>
                    {featured.title}
                  </h3>
                  <h4>
                    {featured.subtitle}
                  </h4>
                  <p><i>Posted by {featured.author} on {featured.date}</i></p>
                </a>
              </Fade>
            </div>
            </Col>
            <Col md={4}>
            </Col>
            <Col md={5} style= {{paddingTop: "20vh", textAlign: "center"}}>
              <div className= "blog-featured-thumbnail web-only">
                <a href={featured.link}>
                  <div style={{textAlign: "center", width: "100%", position: "absolute", paddingTop: "10px"}}>
                    <h4>VIEW POST</h4>
                  </div>
                  <img src= {featured.image} 
                  style= {{width: "100%", top: "0"}}></img>
                </a>
              </div>
            </Col>
            </Row>
            </div>
        </div>
        </section>
    );
  }
}

export default BlogFeatured;
