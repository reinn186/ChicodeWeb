import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import Icon from '../Pencil.png';
import Icon2 from '../whh_website.png';
import Icon3 from '../clarity_mobile-phone-solid.png';
import AOS from "aos";
import "aos/dist/aos.css";


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
  offset: 200, // offset (in px) from the original trigger point
  delay: 150, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'center-center', // defines which position of the element regarding to window should trigger the animation

});
function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading data-aos="fade-left">Services</PricingHeading>
          <PricingHeading1 data-aos="fade-right">WHAT WE DO ?</PricingHeading1>
          <PricingContainer>
            <PricingCard data-aos="fade-up">
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
            <PricingCard data-aos="fade-down">
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
            <PricingCard  data-aos="fade-up">
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
