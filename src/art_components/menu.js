import React, { Component } from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import '../css/standard.css';

class ArtMenu extends Component {
  
  render() {
    return (
      <div className = "sidenav">
        <Nav vertical>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="art-home" href= "" spy={true} smooth={true} duration= {800}> Top</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="art-about" href= "" spy={true} smooth={true} duration= {800}> About</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="art-intro" href= "" spy={true} smooth={true} duration= {800}> Introduction</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="art-featured" href= "" spy={true} smooth={true} duration= {800}> Featured</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="artwork" href= "" spy={true} smooth={true} duration= {800}> Abstract</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="blog" href= "" spy={true} smooth={true} duration= {800}> Digital</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="contact" href= "" spy={true} smooth={true} duration= {800}> Realism</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="contact" href= "" spy={true} smooth={true} duration= {800}> Tech</Link>
          </NavItem>
          <a href="/dev">Home</a>
        </Nav>
      </div>
    );
  }
}

export default ArtMenu;
