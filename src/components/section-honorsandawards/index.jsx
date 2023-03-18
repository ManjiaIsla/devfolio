import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionHonorsAndAwards = ({ honorsandawards }) => {
  if (!honorsandawards.length) return null;

  return (
    <Section title="Honors And Awards">
      {honorsandawards.map((honorsandaward) => (
        <SummaryItem
          key={honorsandaward.name}
          name={honorsandaward.name}
          description={honorsandaward.description}
          link={honorsandaward.link}
        />
      ))}
    </Section>
  );
};

export default SectionHonorsAndAwards;
