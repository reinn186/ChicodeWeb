import React from 'react';
import { Button } from '../../globalStyles';
import Ellipse1 from '../Ellipse1.png';
import Ellipse2 from '../Ellipse 2.png';
import { HashLink as Link } from 'react-router-hash-link';
import {
  AboutContainer,
  AboutSubscription,
  AboutSubText,
  AboutSubHeading,
  Form,
  FormInput,
  AboutLinksContainer,
  AboutLinksWrapper,
  AboutLinkItems,
  AboutLinkItems2,
  AboutLinkTitle,
  AboutLinkTitle2,
  AboutLinkLogo,
  AboutLink,
  AboutOur,
  AboutText,
  Subtitle,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  AboutLinkTitle3,
  SocialIconLink
} from './About.elements';

function About() {
  return (
    <AboutContainer id="About">
      <AboutLinksContainer>
        <AboutLinksWrapper>
          <AboutLinkItems>
            <AboutLinkTitle>About Us</AboutLinkTitle>
            <Subtitle>Chicode is a developer team based in the city of Yogyakarta. Chicode is a developer team and we try to solve problems that exist in your company using research, design and writing code. </Subtitle>
            </AboutLinkItems>
          <AboutLinkItems>
            <br></br>
            <AboutLinkTitle3>Do you have a </AboutLinkTitle3>
            <AboutLinkTitle3>Problem ?</AboutLinkTitle3>
            <Subtitle>Let’s discuss with us </Subtitle>
            <AboutLink to="//mail.google.com/mail/?view=cm&fs=1&to=chicodeyk5@gmail.com" target="_blank">chicodeyk5@gmail.com</AboutLink>
          </AboutLinkItems>
        </AboutLinksWrapper>
        </AboutLinksContainer>
        <AboutLinksContainer>
        {/* <AboutLinksWrapper>
          <AboutLinkItems> */}
            <AboutOur>Our Teams</AboutOur>
        {/* </AboutLinkItems>
        </AboutLinksWrapper> */}
        </AboutLinksContainer>
        
        <AboutLinksContainer>
        <AboutLinksWrapper>
          <AboutLinkItems2>
            <AboutLinkLogo><img className="Ellipse1" src={Ellipse1} alt="Andri"/></AboutLinkLogo>
            <AboutLinkTitle2>Reinn</AboutLinkTitle2>
            <AboutText>UI/UX&Frontend Designer</AboutText>
          </AboutLinkItems2>
          <AboutLinkItems2>
          <AboutLinkLogo><img className="Ellipse1" src={Ellipse2} alt="Fandi"/></AboutLinkLogo>
            <AboutLinkTitle2>Fandi</AboutLinkTitle2>
            <AboutText>Fullstack Developer</AboutText>
          </AboutLinkItems2>
        </AboutLinksWrapper>
      </AboutLinksContainer>    
      
    </AboutContainer>
    
  );
}

export default About;
