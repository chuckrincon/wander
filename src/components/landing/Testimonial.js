import React from 'react';
import {Row, Col} from 'reactstrap';
import Section from '../common/Section';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AntlerCard from '../properties/antler/AntlerCard';

const Testimonial = () => (
  <Section className="text-center">
    <Row className="justify-content-center">
      <Col xs={10} lg={9} xl={8}>
        <div className="px-5 px-sm-6">
          <p className="fs-sm-1 fs-md-2 font-italic text-dark">
            Wander is a collection of boutique properties designed to escape the craziness of modern
            cities.
          </p>
        </div>
      </Col>
    </Row>
    <Row className="mt-5">
      <Col xs="12" lg="6">
        <AntlerCard />
      </Col>
    </Row>
  </Section>
);

export default Testimonial;
