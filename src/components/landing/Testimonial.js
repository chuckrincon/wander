import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Section from '../common/Section';
import Slider from 'react-slick';
import { isIterableArray } from '../../helpers/utils';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import testimonials from '../../data/testimonial/testimonialList';

const TestimonialItem = ({ description, author, designation, companyImage }) => {
  return (
    <div className="px-5 px-sm-6">
      <p className="fs-sm-1 fs-md-2 font-italic text-dark">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p className="fs-0 text-600">
        - {author}, {designation}
      </p>
      {/* <img className="w-auto mx-auto" src={companyImage} alt="" height="30" /> */}
    </div>
  );
};

TestimonialItem.propTypes = {
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  companyImage: PropTypes.string.isRequired
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Testimonial = () => (
  <Section className="text-center">
    <Row className="justify-content-center">
      <Col xs={10} lg={9} xl={8}>
        <Slider {...settings}>
          {isIterableArray(testimonials) &&
            testimonials.map((testimonial, index) => <TestimonialItem {...testimonial} key={index} />)}
        </Slider>
      </Col>
    </Row>
  </Section>
);

export default Testimonial;
