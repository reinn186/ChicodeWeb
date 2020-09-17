import React from 'react';
import { Button } from '../../globalStyles';
import Logo from '../chicode 7.png';
import Logo2 from '../instagram.png';
import Logo3 from '../mail.png';
import Logo4 from '../phone.png';
import { HashLink as Link } from 'react-router-hash-link';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinkGambar,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  FooterHead,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer id="section4">
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>LET'S TALK</FooterLinkTitle>
            <FooterHead>Ask us anything, project or say hi!</FooterHead>
            <FooterLink to='/'> <img className="LogoFooter2" src={Logo3} alt="Logo" /> chicoode5@gmail.com</FooterLink>
            <FooterLink to='/'><img className="LogoFooter3" src={Logo4} alt="Logo" />  +62813 9262 7368</FooterLink>
            <FooterLink to='/'><img className="LogoFooter3" src={Logo2} alt="Logo" /> chicode5</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkGambar>  <img className="LogoFooter" src={Logo} alt="Logo" />
          </FooterLinkGambar>
            <FooterSubText>We write code with Confidence and aim to provide Hope and Inspiration to our partners.</FooterSubText>
            </FooterLinkItems>
      
        </FooterLinksWrapper>
      </FooterLinksContainer>
      
    </FooterContainer>
  );
}

export default Footer;