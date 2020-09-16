import styled from 'styled-components';

export const InfoSec = styled.div`
  color: #fff;
  padding: 68px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#FC9D05')};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Buttons = styled.button`
  width: 190px;
  height: 37px;
  left: 100px;
  top: 588px;
  background: #FFFFFF;
  border: 1px solid #FC9D05;
  box-sizing: border-box;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
      background-color: #FC9D05;
  }
  
   @media screen and (max-width: 960px) {
    text-align: auto;
    margin:10px auto;
    width: 100%;
    background-color:#FC9D05;
    font-size: 20px;
    border-radius: 10px;
    height:20%;
  }
  `;



export const TextWrapper = styled.div`
  max-width: 450px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
  margin-bottom: -69px;
  margin-top: 69px;
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Heading = styled.h1`
  margin-top:40px;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
 `;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#737373' : '#1c2237')};
`;

export const SubtitleRight = styled.p`
  max-width: 440px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  color: ${({ lightTextDesc2 }) => (lightTextDesc2 ? '#737373' : '#1c2237')};
`;
