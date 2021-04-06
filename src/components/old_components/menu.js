import React, { Component } from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import '../css/standard.css';

class Menu extends Component {
  
  render() {
    return (
      <div className = "sidenav">
        <Nav vertical>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="welcome" href= "" spy={true} smooth={true} duration= {800}> Welcome</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="about" href= "" spy={true} smooth={true} duration= {800}> About</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="education" href= "" spy={true} smooth={true} duration= {800}> Education</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="experience" href= "" spy={true} smooth={true} duration= {800}> Experience</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="artwork" href= "" spy={true} smooth={true} duration= {800}> Artwork</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="blog" href= "" spy={true} smooth={true} duration= {800}> Blog</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="contact" href= "" spy={true} smooth={true} duration= {800}> Contact</Link>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Menu;
