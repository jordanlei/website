import React, { Component } from 'react';
import {
  Nav, 
  NavItem, 
  UncontrolledDropdown, 
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';
import {Link, withPrefix} from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import '../css/style.css';
import "../css/mobile.css";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  

  render() {
    var menuitems = <Nav vertical>
          <NavItem>
            <Link to={"/"}>Top</Link>
          </NavItem>
          <NavItem>
            <Link to={"/#about"}>About</Link>
          </NavItem>
          <NavItem>
            <Link to={"/#education"}>Education</Link>
          </NavItem>
          <NavItem>
            <Link to={"/#experience"}>Experience</Link>
          </NavItem>
          <NavItem>
            <Link to={"/#art"}>Artwork</Link>
          </NavItem>
          <NavItem>
            <Link to={"/#blog"}>Blog</Link>
          </NavItem>
          <NavItem>
            <Link to={"/#contact"}>Contact</Link>
          </NavItem>
        </Nav>

    return (
      <div>
      <div className = "mobile-only topnav">
          <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <StaticImage src="../images/menu-button.png" style={{height: "30px", width:"30px"}} alt=""/>   
                </DropdownToggle>
                <DropdownMenu end>
                  {menuitems}
                </DropdownMenu>
          </UncontrolledDropdown>
      </div>
      <div className = "sidenav desktop-only">
        {menuitems}
      </div>
      </div>
    );
  }
}

export default Menu;
