import React from 'react';
import Typed from 'react-typed';
import {Row, Col} from 'reactstrap';
import banner from '../../assets/img/banner.jpeg';
import Section from '../common/Section';

const Banner = () => {
  return (
    <Section className="py-0 overflow-hidden" image={banner} position="center bottom" overlay>
      <Row className="justify-content-center align-items-center pt-8 pt-lg-10 pb-lg-9 pb-xl-0">
        <Col md={12} lg={8} xl={5} className="pb-7 pb-xl-9 text-center text-xl-left">
          <h1 className="text-white font-weight-light">
            Wander{' '}
            <span style={{display: 'inline-block', minHeight: '100px'}}>
              <Typed
                strings={['away', 'home', 'somewhere', 'anywhere']}
                typeSpeed={80}
                backSpeed={100}
                className="font-weight-bold"
                loop
              />
            </span>
          </h1>
          {/* <p className="lead text-white">Get away. In your own way.</p> */}
        </Col>
      </Row>
    </Section>
  );
};

export default Banner;
