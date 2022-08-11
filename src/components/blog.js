import React, { Component } from 'react';
import { Row, Col, Card} from 'reactstrap';
import Fade from 'react-reveal';

class Blog extends Component {
  
  render() {
    const items= [
      {
        title: "A Love Letter to Tomorrow", 
        subtitle: "And Other Stories of My Asian American Upbringing - 13 min read", 
        image: '../blog-image-1.jpeg',
        link: "https://jordanlei.medium.com/a-love-letter-to-tomorrow-df222e36ff31"
      },
      {
        title: "(Human) Domain Expertise in the Age of Deep Learning", 
        subtitle: "It’s a burgeoning area of AI-but where is it headed? - 6 min read", 
        image: '../blog-image-2.jpeg',
        link: "https://medium.com/swlh/human-domain-expertise-in-the-age-of-deep-learning-89b3381c5cba"
      },
      {
        title: "Machine Minds", 
        subtitle: "A brief journey into neuroscience and deep learning, and what it means for modern society - 18 min read", 
        image: '../blog-image-3.jpeg',
        link: "https://medium.com/swlh/machine-minds-a59cfb8d8d14"
      },

    ]

    var cards = items.map((i)=>{
      return <div>
      
      <Card className="blog-card" style={{marginBottom: "20px"}}>
        <a href={i.link} target="_blank">
        <Row style={{minHeight: "30vh"}}>
          <Col md={4}>
            <Card className="blog-card-img" style={{backgroundImage: "url("+i.image+")", 
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            height: "100%",
            border: "8px"}}/>
          </Col>
          <Col md={8} style={{padding: "5%"}}>
            <div className="blog-card-text">
            <h4>{i.title}</h4>
            <p><i>{i.subtitle}</i></p>
            </div>
          </Col>
        </Row>
        </a>
      </Card>
     
      </div>
    })

    return (
      <section id="blog">
      <div className="dark section" style={{paddingBottom: 2+"%"}}>            
        <Fade><h1>THOUGHTS</h1></Fade>
        <h4>
            <span className="stdbutton">
              <a href="https://jordanlei.medium.com/" target="_blank">
              VIEW BLOG
              <img src={"../next.png"} height="30" width="30" style={{marginLeft: "12px", marginTop: "-1px"}}/>
              </a>
            </span>
        </h4>
        <div style={{paddingTop: "30px"}}>
        {cards}
        </div>
      </div>
      </section>
    );
  }
}

export default Blog;
