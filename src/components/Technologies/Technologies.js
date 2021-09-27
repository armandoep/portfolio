import React from 'react';
import { DiFirebase, DiJavascript1, DiHtml5, DiCss3Full, DiNodejsSmall, DiLaravel } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      <br />
      Backend and Frontend
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiHtml5 size="3rem" />
          <DiCss3Full size="3rem" />
          <DiJavascript1 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React, Vue and Ionic
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
          <DiNodejsSmall size="3rem" />
          <DiLaravel size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node, Laravel and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
