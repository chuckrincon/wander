import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import NavbarStandard from '../navbar/NavbarStandard';
import Banner from './Banner';
import Processes from './Processes';
import Services from './Services';
import Testimonial from './Testimonial';
import Cta from './Cta';
import FooterStandard from './FooterStandard';

const Landing = ({ location }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Fragment>
      <NavbarStandard hasTransition />
      <Banner />
      {/* <Processes /> */}
      {/* <Services /> */}
      <Testimonial />
      {/* <Cta /> */}
      <FooterStandard />
    </Fragment>
  );
};

Landing.propTypes = { location: PropTypes.object.isRequired };

export default Landing;
