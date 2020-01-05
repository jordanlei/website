import React, { Component } from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";

class PostMenu extends Component {
  
  render() {
    return (
      <div>
      <div className = "sidenav web-only" style={{top: "45vh"}}>
        <Nav vertical>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="blog-head" href= "" spy={true} smooth={true} duration= {800}> Top</Link>
          </NavItem>
          <a href="/blog">Back</a>
        </Nav>
      </div>

      <div className = "sidenav mobile-only" style={{position: "fixed", top:"0", left: "0", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
      <Nav>
        <div style={{paddingLeft: "20px", paddingRight: "20px"}}>
        <NavItem>
          <Link class= "navlink" activeClass="active" to="blog-head" href= "" spy={true} smooth={true} duration= {800}> Top</Link>
        </NavItem>
        </div>
        <a href="/blog">Back</a>
      </Nav>
      </div>
      </div>
    );
  }
}

export default PostMenu;
