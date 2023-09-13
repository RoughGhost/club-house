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
        This is AstraStream Digital: Get Ready to Dominate in Your Local Market
      </SectionTitle>
      <SectionText>
        You've landed at AstraStream Digital, an SMM (Social Media Marketing)
        Agency headquartered in Montreal, Canada. Here at AstraStream, we're not
        just about digital marketing; we're your dedicated partners in growth.
        We empower small business owners to supercharge their advertising
        strategies, achieving unmatched revenue heights and dominate in their
        local markets, all without stretching their budgets.
      </SectionText>
      <Button onClick={() => (window.location = "https://www.facebook.com/")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
