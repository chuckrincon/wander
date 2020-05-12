import React from 'react';
import PropTypes from 'prop-types';
import {Media} from 'reactstrap';

const CompanySummary = ({imgSrc, headline, description, divider, to}) => (
  <Media className="mb-4">
    <a href={to} target="_blank" rel="noopener noreferrer">
      {imgSrc && <img className="img-fluid" src={imgSrc} width={56} alt="" />}
    </a>
    <Media body className="position-relative pl-3 btn-reveal-trigger">
      <h6 className="fs-0 mb-0 d-flex justify-content-between align-items-start">
        <a href={to} target="_blank" rel="noopener noreferrer">
          {headline}
        </a>
      </h6>
      <p className="text-1000 mb-0">{description}</p>
      {divider && <hr className="border-dashed border-bottom-0" />}
    </Media>
  </Media>
);

CompanySummary.propTypes = {
  headline: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  to: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  divider: PropTypes.bool,
  isEditable: PropTypes.bool,
};

export default CompanySummary;
