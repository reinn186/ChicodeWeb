import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  color:#080808;  
`;

export const AboutContainer = styled.div`
  background-color: #FC9D05;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

export const AboutSubHeading = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const AboutSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`

export const AboutLinksContainer = styled.div`
  width: 50%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const AboutLinksWrapper = styled.div`
  display: flex;
  margin-top: -100px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const AboutLinkItems = styled.div`
  padding-left: 50px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px;
  text-align: left;
  width: 450px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 30px;
    width: 100%;
  }
`;


export const AboutLinkItems2 = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;
  text-align: left;
  width: 126px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 50px;
    width: 100%;
  }
`;

export const AboutLinkTitle = styled.h1`
  margin-bottom: 10px;
  color:#080808;
  
 
`;

export const AboutLinkTitle2 = styled.h1`
  margin-bottom: 10px;
  color:#080808;
  font-size: 24px;
  font-weight: 500;
`;

export const AboutLinkLogo = styled(Link)`
  margin-bottom: 16px;
`;

export const AboutLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 20px;
  text-decoration: underline;


  &:hover {
    color: #080808;
    transition: 0.3s ease-out;
  }
`;

export const AboutText = styled.div`
  color: #080808;
  font-weight: 400;
  text-align:center;
`;

export const AboutOur = styled.h1`
 color: #080808;
 margin-bottom: 30px;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
