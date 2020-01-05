import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';


class BlogPostList extends Component {
  constructor(props){
    super(props);
    this.state = {
        posts: this.props.posts
    };
  }

  render() {
    var postlist = this.state.posts.map((i)=>{
      return(
        <Col md={4}>
          <a href= {i.link}>
            <div style={{paddingLeft: "5%", paddingRight: "5%"}}> 
              <img src= {i.image} style={{width: "100%"}}></img>
              <h4>{i.title}</h4>
              <div className="web-only">
                <h5>{i.subtitle}</h5>
                <p><i>Posted by {i.author} on {i.date}</i></p>
              </div>
            </div>
          </a>
        </Col>
      )
    });

    return (
    <section id= "blogpostlist">
      <div className= "dark-container" style={{position: "relative"}}>
        <Row>
          {postlist}
        </Row>
      </div>
    </section>
    );
  }
}

export default BlogPostList;
