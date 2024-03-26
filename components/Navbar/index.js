import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu style={{marginLeft: 280}}>
          <NavLink to="/about" activeStyle>
            About Me
          </NavLink>
          <NavLink to="/education" activeStyle>
            Education
          </NavLink>
          <NavLink to="/skills" activeStyle>
            Skills
          </NavLink>
          <NavLink to="/work-experience" activeStyle>
            Work Experience
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
