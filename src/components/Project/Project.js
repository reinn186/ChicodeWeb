import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import Icon from '../Pencil.png';
import Icon2 from '../whh_website.png';
import Icon3 from '../clarity_mobile-phone-solid.png';
import Pict1 from '../Rectangle 8.png';
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

function Project() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <ProjectSection id="Projects">
        <ProjectWrapper>
          <ProjectHeading>SELECTED PROJECTS</ProjectHeading>
          <ProjectContainer>
            <ProjectCard>
              <img className="Pict1" src={Pict1} alt="Picture1"/>
              {/* <ProjectHeadline>Astra International</ProjectHeadline>
              <ProjectSubtitle>2018</ProjectSubtitle>
              <ProjectLink>View Project</ProjectLink> */}
            </ProjectCard>
            {/* <ProjectSubtitle>2018</ProjectSubtitle>
            <ProjectLink>View Project</ProjectLink> */}
            <ProjectCard>
              <img className="Pict1" src={Pict1} alt="Picture1"/>
            </ProjectCard>
            <ProjectCard>
              <img className="Pict1" src={Pict1} alt="Picture1"/>
            </ProjectCard>
          </ProjectContainer>
        </ProjectWrapper>
      </ProjectSection>
    </IconContext.Provider>
  );
}
export default Project;
