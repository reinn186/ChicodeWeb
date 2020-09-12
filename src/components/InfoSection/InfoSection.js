import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
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
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}<span className="Span1">{headline2}</span><span>{headline3}</span></Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <SubtitleRight lightTextDesc2={lightTextDesc2}>{description2}</SubtitleRight>
                <Link to='/'>
                  <Buttons big fontBig primary={primary}>
                    {buttonLabel}
                  </Buttons>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
