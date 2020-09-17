import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import Logo from '../chicode 7.png';
import { HashLink } from "react-router-hash-link";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  StyledLinks,
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#FC9D05' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <img className="Logo" src={Logo} alt="Logo" />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks onClick={closeMobileMenu}>
                <StyledLinks to="/#section1" smooth>HOME</StyledLinks>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks onClick={closeMobileMenu}>
                <StyledLinks to="/#section2" smooth> ABOUT</StyledLinks>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks onClick={closeMobileMenu}>
                <StyledLinks to="/#section3" smooth> PROJECTS </StyledLinks>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks onClick={closeMobileMenu}>
                <StyledLinks to="/#section4" smooth> CONTACT </StyledLinks>
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
