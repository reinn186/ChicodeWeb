import React from 'react';
import { Button } from '../../globalStyles';
import Ellipse1 from '../Ellipse1.png';
import Ellipse2 from '../Ellipse 2.png';
import { HashLink as Link } from 'react-router-hash-link';
import AOS from "aos";
import "aos/dist/aos.css";

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

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 70, // offset (in px) from the original trigger point
  delay: 150, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

function About() {


  return (
    <AboutContainer id="About">
      <AboutLinksContainer>
        <AboutLinksWrapper>
          <AboutLinkItems  data-aos="fade-left">
            <AboutLinkTitle>About Us</AboutLinkTitle>
            <Subtitle>Chicode is a developer team based in the city of Yogyakarta. Chicode is a developer team and we try to solve problems that exist in your company using research, design and writing code. </Subtitle>
            </AboutLinkItems>
          <AboutLinkItems  data-aos="fade-right">
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
            <AboutOur data-aos="fade-down">Our Teams</AboutOur>
        {/* </AboutLinkItems>
        </AboutLinksWrapper> */}
        </AboutLinksContainer>
        
        <AboutLinksContainer>
        <AboutLinksWrapper>
          <AboutLinkItems2>
            <AboutLinkLogo data-aos="fade-up" ><img className="Ellipse1" src={Ellipse1} alt="Andri"/></AboutLinkLogo>
            <AboutLinkTitle2 data-aos="fade-right">Reinn</AboutLinkTitle2>
            <AboutText data-aos="fade-left">UI/UX&Frontend Designer</AboutText>
          </AboutLinkItems2>
          <AboutLinkItems2>
          <AboutLinkLogo data-aos="fade-up"><img className="Ellipse1" src={Ellipse2} alt="Fandi"/></AboutLinkLogo>
            <AboutLinkTitle2 data-aos="fade-right">Fandi</AboutLinkTitle2>
            <AboutText data-aos="fade-left" >Fullstack Developer</AboutText>
          </AboutLinkItems2>
        </AboutLinksWrapper>
      </AboutLinksContainer>    
      
    </AboutContainer>
    
  );
}

export default About;
