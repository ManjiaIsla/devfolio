import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionHonorsAndAwards = ({ honorsandawards }) => {
  if (!honorsandawards.length) return null;

  return (
    <Section title="Honors And Awards">
      {honorsandawards.map((honorsandawards) => (
        <SummaryItem
          key={honorsandawards.name}
          name={honorsandawards.name}
          description={honorsandawards.description}
          link={honorsandawards.link}
        />
      ))}
    </Section>
  );
};

export default SectionHonorsAndAwards;
