import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import NavbarStandard from '../navbar/NavbarStandard';
import Banner from './Banner';
import Testimonial from './Testimonial';
import FooterStandard from './FooterStandard';

const Landing = ({location}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Fragment>
      <NavbarStandard hasTransition />
      <Banner />
      <Testimonial />
      <FooterStandard />
    </Fragment>
  );
};

Landing.propTypes = {location: PropTypes.object.isRequired};

export default Landing;
