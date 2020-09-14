import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProjectSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #FC9D05 ;
  /* #4b59f7 */
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjectHeading = styled.h1`
  color: #080808;
  font-size: 32px;
  margin-bottom: 10px;
  font-weight:700;
`;

export const ProjectHeading1 = styled.h1`
  color: #080808;
  font-size: 36px;
  margin-bottom: 24px;

`;

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const ProjectCard = styled.div`
  background: #FC9D05;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 400px;
  height: 420px;
  text-decoration: none;
  border-radius: 10px;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    background-color: #FC9D05;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    

    &:hover {
      transform: none;
    }
  }
`;

export const ProjectCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const ProjectCardIcon = styled.div`
  margin: 24px 0;
`;

export const ProjectCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
  color:#080808;
`;

export const ProjectCardCost = styled.h4`
  font-size: 40px;
`;

export const ProjectCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const ProjectCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #080808;
  opacity: 80% ;
  text-align:center;

`;

export const ProjectCardFeature = styled.li`
  margin-bottom: 10px;
`;

export const ProjectHeadline = styled.h1`
  margin-top:15x;
  font-size : 24px;
  font-weight: 700;
  
`;

export const ProjectSubtitle = styled.p`
  font-size: 20px;
  margin-top:5px;
  margin-bottom: 0,5rem;
`;
export const ProjectLink = styled(Link)`

  font-size: 22px;
  padding-top: 30px;
  text-decoration: underline;
  color : #080808;
`;