import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Certificates = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="certificates" />
    <div className="title">
      <h3>Certification</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Certificates.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Certificates.defaultProps = {
  data: [],
};

export default Certificates;
