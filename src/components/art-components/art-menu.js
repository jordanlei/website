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

class ArtMenu extends Component {
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
            <Link to={"/art/"}>Top</Link>
          </NavItem>
          <NavItem>
            <Link to={"/"}>Home</Link>
          </NavItem>
        </Nav>

    return (
      <div>
      <div className = "mobile-only topnav">
          <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <StaticImage src="../images/menu-button.png" style={{height: "30px", width:"30px"}} alt=""/>   
                </DropdownToggle>
                <DropdownMenu right>
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

export default ArtMenu;
