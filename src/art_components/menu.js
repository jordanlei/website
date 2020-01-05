import React, { Component } from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import '../css/standard.css';

class ArtMenu extends Component {
  
  render() {
    return (
      <div>
      <div className = "sidenav web-only">
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
          <a href="/">Home</a>
        </Nav>
      </div>
      <div className = "sidenav mobile-only" style={{position: "fixed", top:"0", left: "0", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
        <Nav>
          <div style={{paddingLeft: "20px", paddingRight: "20px"}}>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="art-home" href= "" spy={true} smooth={true} duration= {800}> Top</Link>
          </NavItem>
          </div>
          <a href="/">Home</a>
        </Nav>
      </div>
      </div>
    );
  }
}

export default ArtMenu;
