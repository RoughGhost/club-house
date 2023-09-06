import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hola !<br />
        Welcome to AstraStream Digital
      </SectionTitle>
      <SectionText>
        You have arrived at AstraStream Digital an SMM (Social Media Marketing)
        Agency based in Manchester, UK. We not only specialize in digital
        marketing but also serve as your committed growth allies. Our
        fundamental principles revolve around a robust Unique Selling
        Proposition that flawlessly merges data-based digital marketing
        expertise with tailored coaching tactics, teaching small business owners
        how to enhance their advertising strategies to achieve unparalleled
        revenue peaks wihout breaking the bank.
      </SectionText>
      <Button onClick={() => (window.location = "https://www.facebook.com/")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
