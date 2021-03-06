import styled from 'styled-components';
// import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import { HashLink } from "react-router-hash-link";
import { animateScroll as scroll } from "react-scroll";


export const Nav = styled.nav`
@keyframes slidingstep1 {
  0%   { left: -100px; opacity:0;}
  5%   { left: -75px; opacity:0.2;}
  10%   { left: -50px; opacity:0.4;}
  15%   { left: -25px; opacity:0.6;}    
  20%  { left: 0px;opacity:1; }
  100% { left: 0px;opacity:1; }
 }

animation-name: slidingstep1;
 animation-duration: 10s;
 animation-iteration-count: 1;         
 animation-direction: normal;
 animation-timing-function: linear;
 animation-fill-mode: forwards;
 
  background: rgba(255,255,255,0.9);
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2 rem;
  top: 0;
  z-index: 999;
  width: 100%;
  position: fixed;


`;

// Buat navbar, justify content strect biar longgar
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content:stretch;
  height: 80px;
  

  ${Container}
`;

export const NavLogo = styled(Link)`
@keyframes slidingstep1 {
  0%   { left: -100px; opacity:0;}
  5%   { left: -75px; opacity:0.2;}
  10%   { left: -50px; opacity:0.4;}
  15%   { left: -25px; opacity:0.6;}    
  20%  { left: 0px;opacity:1; }
  100% { left: 0px;opacity:1; }
 }

animation-name: slidingstep1;
 animation-duration: 10s;
 animation-iteration-count: 1;         
 animation-direction: normal;
 animation-timing-function: linear;
 animation-fill-mode: forwards;

  color: #080808;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  padding-right: 220px;

`;

// export const NavIcon = styled(FaMagento)`
//   margin-right: 0.5rem;
// `;


export const MobileIcon = styled.div`
  color:#080808;
  display:none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  
  }
`;


export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 110vh;
    position: absolute;
    top: 60px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #FC9D05;
    position: fixed;
  }
`;

// Untuk ketinggian border bottom
export const NavItem = styled(HashLink)`
  height: 60px;
  border-bottom: 2px solid  #080808 transparent;
  text-decoration:none;
  
  

  /* Buat warna border bottom website */
  &:hover {
    border-bottom: 3px solid #FC9D05; 
  }


/* mobile */
  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

// Untuk teks saat website
export const NavLinks = styled(Link)` 
  color: #080808;
  font-family: montserrat;
  display: flex;
  align-items: center;
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  /* Untuk isi hamburger menu saat mobile */
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    
    &:hover {
      color: #fff;
      transition: all 0.3s ease;
    }
  }
`;




export const StyledLinks = styled(HashLink)`
  text-align: start;
  /* grid-area: 1/2/2/3; */
  position: relative;
  /* justify-self: start; */
  /* align-self: start; */
  font-size: 16px;
  text-decoration: none;
  color: #080808;
  font-family: montserrat;
  @media (max-width: 980px) {
    font-size: 16px;
    
  }
`;



// 