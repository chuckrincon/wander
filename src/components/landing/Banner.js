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
            Calculate the impact of
            <Typed
              strings={['Residential Solar', 'Electric Vehicles', 'Battery Storage']}
              typeSpeed={40}
              backSpeed={50}
              className="font-weight-bold pl-2"
              loop
            />
          </h1>
          <p className="lead" style={{ color: '#222' }}>
            Determine the impact of DER penetration on your utility and its customers.
          </p>
          <Link className="btn btn-outline-light border-2x rounded-pill btn-lg mt-4 fs-0 py-2" to="/pricing">
            Register
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
