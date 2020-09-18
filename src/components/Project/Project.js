import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import Icon from '../Pencil.png';
import Icon2 from '../whh_website.png';
import Icon3 from '../clarity_mobile-phone-solid.png';
import Pict1 from '../Rectangle 8.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { HashLink as Link } from 'react-router-hash-link';


import {
  ProjectSection,
  ProjectWrapper,
  ProjectHeading,
  ProjectContainer,
  ProjectCard,
  ProjectHeadline,
  ProjectSubtitle,
  ProjectLink,
  ProjectCardInfo,
  ProjectCardIcon,
  ProjectCardPlan,
  ProjectCardCost,
  ProjectCardLength,
  ProjectCardFeatures,
  ProjectCardFeature,
  ProjectHeading1
} from './Project.elements';

function Project()
{
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
    offset: 150, // offset (in px) from the original trigger point
    delay: 150, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <ProjectSection  id="Projects">
        <ProjectWrapper>
          <ProjectHeading data-aos="fade-left">Selected Projects</ProjectHeading>
          <ProjectContainer>
            <ProjectCard data-aos="fade-up">
              <img className="Pict1" src={Pict1} alt="Picture1"/>
              <ProjectHeadline>- Coming Soon -</ProjectHeadline>
              {/* <ProjectSubtitle>2018</Proj-ectSubtitle>
              <ProjectLink>View Project</ProjectLink> */}
            </ProjectCard>
            {/* <ProjectSubtitle>2018</ProjectSubtitle>
            <ProjectLink>View Project</ProjectLink> */}
            {/* <ProjectCard>
              <img className="Pict1" src={Pict1} alt="Picture1"/>
            </ProjectCard>
            <ProjectCard>
              <img className="Pict1" src={Pict1} alt="Picture1"/>
            </ProjectCard> */}
          </ProjectContainer>
        </ProjectWrapper>
      </ProjectSection>
    </IconContext.Provider>
  );
}
export default Project;
