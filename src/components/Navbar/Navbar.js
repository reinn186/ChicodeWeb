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
            <NavLogo  onClick={closeMobileMenu}>
            <StyledLinks to='/#Home'><img className="Logo" src={Logo} alt="Logo" /></StyledLinks >
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem to="/#Home" smooth>
                <NavLinks onClick={closeMobileMenu}>
                <StyledLinks >Home</StyledLinks>
                </NavLinks>
              </NavItem>
              <NavItem to="/#About" smooth>
                <NavLinks onClick={closeMobileMenu}>
                <StyledLinks > About</StyledLinks>
                </NavLinks>
              </NavItem>
              <NavItem to="/#Projects" smooth>
                <NavLinks onClick={closeMobileMenu}>
                <StyledLinks> Projects </StyledLinks>
                </NavLinks>
              </NavItem>
              <NavItem to="/#Contacts" smooth>
                <NavLinks onClick={closeMobileMenu}>
                <StyledLinks> Contacts </StyledLinks>
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
