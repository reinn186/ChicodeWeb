import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import Panda from '../Panda.png';
import Andri from '../AndriFix.png';
import { HashLink as Link} from 'react-router-hash-link';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  SubtitleRight,
  ImgWrapper,
  Img,
  Buttons,
} from './InfoSection.elements';

function InfoSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  lightTextDesc2,
  headline,
  headline2,
  headline3,
  description,
  description2,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) {
  return (
    <>
      <InfoSec lightBg={lightBg} id="Home">
        <Container>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}<span className="Span1">{headline2}</span><span>{headline3}</span></Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <SubtitleRight lightTextDesc2={lightTextDesc2}>{description2}</SubtitleRight>
                <Link to='/#Contacts'>
                  <Buttons  big fontBig primary={primary}>
                    {buttonLabel}
                  </Buttons>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper>
              <img src={Panda} className="GambarOrang" alt="Logo" /> 
            <img src={Andri} className="GambarOrang" alt="Logo" />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
