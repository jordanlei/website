import React, { Component } from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";

class BlogMenu extends Component {
  
  render() {
    var items=[
      <NavItem>
          <Link class= "navlink" activeClass="active" to="blog-welcome" href= "" spy={true} smooth={true} duration= {800}> Top</Link>
      </NavItem>,
      <NavItem>
          <Link class= "navlink" activeClass="active" to="blog-featured" href= "" spy={true} smooth={true} duration= {800}> Featured</Link>
      </NavItem>,
      <NavItem>
          <Link class= "navlink" activeClass="active" to="blogpostlist" href= "" spy={true} smooth={true} duration= {800}> Posts</Link>
      </NavItem>,
      <a href="/">Home</a>
    ]
    return (
      <div>
      <div className = "sidenav web-only">
        <Nav vertical>
          {items}
        </Nav>
      </div>
      <div className = "sidenav mobile-only" style={{position: "fixed", top:"0", left: "0", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
      <Nav>
        <div style={{paddingLeft: "20px", paddingRight: "20px"}}>
        <NavItem>
          <Link class= "navlink" activeClass="active" to="blog-welcome" href= "" spy={true} smooth={true} duration= {800}> Top</Link>
        </NavItem>
        </div>
        <a href="/">Home</a>
      </Nav>
      </div>
      </div>
    );
  }
}

export default BlogMenu;
