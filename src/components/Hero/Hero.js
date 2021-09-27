import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const dowloadCV = () => {

}

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Portfolio
        </SectionTitle>
        <SectionText>
        I'm Edwin Pérez a web developer with experience in frontend and backend development
        </SectionText>
        <a 
        href="https://firebasestorage.googleapis.com/v0/b/portfolio-3013b.appspot.com/o/edwin-armando-perez-palma-english.pdf?alt=media&token=7b054538-86f4-42b3-b3c3-7e6724aae356"
        target="_blank"
        >
          <Button onClick={props.handleClick}>Check my CV</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;