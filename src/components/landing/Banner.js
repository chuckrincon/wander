import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bg1 from '../../assets/img/gallery/solar-on-homes.jpg';
import dashboard from '../../assets/img/generic/dashboard.png';
import Section from '../common/Section';

const Banner = () => {
  return (
    <Section className="py-0 overflow-hidden" image={bg1} position="center bottom" overlay>
      <Row className="justify-content-center align-items-center pt-8 pt-lg-10 pb-lg-9 pb-xl-0">
        <Col md={12} lg={8} xl={5} className="pb-7 pb-xl-9 text-center text-xl-left">
          <h1 className="text-white font-weight-light">
            The impacts of
            <br />
            <span style={{ display: 'inline-block', minHeight: '100px' }}>
              <Typed
                strings={['Residential Solar', 'Electric Vehicles', 'Battery Storage']}
                typeSpeed={40}
                backSpeed={50}
                className="font-weight-bold"
                loop
              />
            </span>
          </h1>
          <p className="lead text-white">
            Determine the financial impacts of DER penetration on your utility and its customers.
          </p>
          <Link className="btn btn-outline-light border-2x btn-lg fs-0 py-2" to="/demo">
            View Demo
            <FontAwesomeIcon icon="play" transform="shrink-6 down-1 right-5" />
          </Link>
        </Col>
        <Col xl={{ size: 6, offset: 1 }} className="align-self-end">
          <Link to="/" className="img-landing-banner">
            <img className="img-fluid" src={dashboard} alt="" />
          </Link>
        </Col>
      </Row>
    </Section>
  );
};

export default Banner;
