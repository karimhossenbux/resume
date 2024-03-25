import { useState } from 'react';
import Work from './Work';
import Skills from './Skills';

const HighlightedSkills = (props) => {
  const [highlightedSkill, setHighlightedSkill] = useState(null);

  return (
    <div>
      <Skills items={props.skills} highlightedSkills={highlightedSkill} />
      <Work items={props.works} setHighlightedSkills={setHighlightedSkill} />
    </div>
  );
};

export default HighlightedSkills;
