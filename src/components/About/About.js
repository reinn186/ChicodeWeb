import React from 'react';
import { Button } from '../../globalStyles';
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
  AboutLink,
  Subtitle,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './About.elements';

function About() {
  return (
    <AboutContainer>
      <AboutLinksContainer>
        <AboutLinksWrapper>
          <AboutLinkItems>
            <AboutLinkTitle>About Us</AboutLinkTitle>
            <Subtitle>Chicode is a developer team based in the city of Yogyakarta. Chicode is a developer team and we try to solve problems that exist in your company using research, design and writing code.</Subtitle>
            </AboutLinkItems>
          <AboutLinkItems>
            <AboutLinkTitle>Do you have a problem  ?</AboutLinkTitle>
            <Subtitle>Let’s discuss with us </Subtitle>
          </AboutLinkItems>
        </AboutLinksWrapper>
        </AboutLinksContainer>
        <h1>HAII</h1>
        <AboutLinksContainer>
        <AboutLinksWrapper>
          <AboutLinkItems2>
            <AboutLinkTitle>Videos</AboutLinkTitle>
            <AboutLink to='/'>Submit Video</AboutLink>
            <AboutLink to='/'>Ambassadors</AboutLink>
            <AboutLink to='/'>Agency</AboutLink>
            <AboutLink to='/'>Influencer</AboutLink>
          </AboutLinkItems2>
          <AboutLinkItems2>
            <AboutLinkTitle>Social Media</AboutLinkTitle>
            <AboutLink to='/'>Instagram</AboutLink>
            <AboutLink to='/'>Facebook</AboutLink>
            <AboutLink to='/'>Youtube</AboutLink>
            <AboutLink to='/'>Twitter</AboutLink>
          </AboutLinkItems2>
        </AboutLinksWrapper>
      </AboutLinksContainer>    
    </AboutContainer>
  );
}

export default About;
