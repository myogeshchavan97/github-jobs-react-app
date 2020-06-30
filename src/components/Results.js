import React from 'react';
import JobItem from './JobItem';

const Results = ({ results, onItemClick }) => {
  return (
    <div className="search-results">
      {results.map((job, index) => (
        <JobItem
          key={job.id}
          {...job}
          index={index}
          onItemClick={onItemClick}
        />
      ))}
    </div>
  );
};

export default Results;
