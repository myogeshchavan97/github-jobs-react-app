import React from 'react';
import moment from 'moment';

const JobItem = (props) => {
  const {
    id,
    type,
    created_at,
    company,
    location,
    title,
    company_logo,
    index,
    onItemClick
  } = props;

  return (
    <div className="job-item" index={index + 1} onClick={() => onItemClick(id)}>
      <div className="company-logo">
        <img src={company_logo} alt={company} width="100" height="100" />
      </div>
      <div className="job-info">
        <div className="job-title">{title}</div>
        <div className="job-location">
          {location} | {type}
        </div>
        <div className="company-name">{company}</div>
      </div>
      <div className="post-info">
        <div className="post-time">
          Posted {moment(new Date(created_at)).fromNow()}
        </div>
      </div>
    </div>
  );
};

export default JobItem;
