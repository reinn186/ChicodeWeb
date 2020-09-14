import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import Icon from '../Pencil.png';
import Icon2 from '../whh_website.png';
import Icon3 from '../clarity_mobile-phone-solid.png';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  PricingHeading1
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Services</PricingHeading>
          <PricingHeading1>WHAT WE DO ?</PricingHeading1>
          <PricingContainer>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <img classname="Icon" src={Icon} alt="Icon"/>
                </PricingCardIcon>
                <PricingCardPlan>UI/UX Designer</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Tell us what you want to make and we will provide the best solution in design.</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                <img classname="Icon" src={Icon3} alt="Icon2"/>
                </PricingCardIcon>
                <PricingCardPlan>Mobile Application</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature> We create mobile applications using Java / React Native / Flutter.</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                <img classname="Icon" src={Icon2} alt="Icon3"/>
                </PricingCardIcon>
                <PricingCardPlan>Website</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature> Tell us the website that you want to create and we will build using Laravel and ReactJS.</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
