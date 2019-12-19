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
            <Link class= "navlink" activeClass="active" to="art-digital" href= "" spy={true} smooth={true} duration= {800}> Digital</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="art-realism" href= "" spy={true} smooth={true} duration= {800}> Realism</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="art-traditional" href= "" spy={true} smooth={true} duration= {800}> Traditional</Link>
          </NavItem>
          <a href="/dev">Home</a>
        </Nav>
      </div>
    );
  }
}

export default ArtMenu;
