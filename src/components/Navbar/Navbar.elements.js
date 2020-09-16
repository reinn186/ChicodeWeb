import styled from 'styled-components';
// import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
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
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #FC9D05;
  }
`;

// Untuk ketinggian border bottom
export const NavItem = styled.li`
  height: 60px;
  border-bottom: 2px solid  #080808 transparent;
  
  

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



// 