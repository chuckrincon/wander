import React from 'react';
import PropTypes from 'prop-types';
import { Col, CardHeader, Row } from 'reactstrap';
import classNames from 'classnames';

const FalconCardHeader = ({ title, light, titleTag: TitleTag, className, children }) => (
  <CardHeader className={classNames({ 'bg-light': light }, className)}>
    {children ? (
      <Row className="align-items-center">
        <Col>
          <TitleTag className="mb-0">{title}</TitleTag>
        </Col>
        <Col xs="auto" className="text-right">
          {children}
        </Col>
      </Row>
    ) : (
      <TitleTag className="mb-0">{title}</TitleTag>
    )}
  </CardHeader>
);

FalconCardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  light: PropTypes.bool,
  titleTag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

FalconCardHeader.defaultProps = { light: true, titleTag: 'h5' };

export default FalconCardHeader;
