import React from 'react';

const ProjectDescription: React.FC<{
  paragraphs: string[];
  bullets: string[];
}> = ({ paragraphs, bullets }) => {
  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p className='mb-4' key={index}>
          {paragraph}
        </p>
      ))}
      <ul className='mt-4 list-disc pl-6'>
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDescription;
