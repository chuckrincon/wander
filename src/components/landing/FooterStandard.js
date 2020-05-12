import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Section from '../common/Section';
import {Row, Col} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {animateScroll} from 'react-scroll';

const FooterTitle = ({children}) => <h5 className="text-uppercase text-light mb-3">{children}</h5>;

FooterTitle.propTypes = {children: PropTypes.node.isRequired};

const FooterStandard = () => {
  return (
    <Fragment>
      <Section bg="dark" className="pt-8 pb-4 mt-5">
        <div
          className="position-absolute btn-back-to-top cursor-pointer"
          onClick={animateScroll.scrollToTop}
        >
          <FontAwesomeIcon icon="chevron-up" transform="rotate-45" className="text-light" />
        </div>
        <Row>
          <Col lg={8}>
            <p className="text-400">Wander away. In your own way.</p>
          </Col>
          <Col lg={{size: 4}} className="text-right">
            <a className="btn btn-secondary" href="mailto:svet.vaisman@gmail.com">
              Email Us
            </a>
          </Col>
        </Row>
      </Section>
    </Fragment>
  );
};

export default FooterStandard;
