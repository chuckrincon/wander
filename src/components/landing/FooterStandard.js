import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import createMarkup from '../../helpers/createMarkup';
import Section from '../common/Section';
import {Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {animateScroll} from 'react-scroll';
import {version} from '../../config';

const FooterTitle = ({children}) => <h5 className="text-uppercase text-light mb-3">{children}</h5>;

FooterTitle.propTypes = {children: PropTypes.node.isRequired};

const FooterList = ({list}) => (
  <ul className="list-unstyled">
    {list.map(({title, to}, index) => (
      <li className="mb-1" key={index}>
        <Link className="text-400" to={to}>
          {title}
        </Link>
      </li>
    ))}
  </ul>
);

FooterList.propTypes = {list: PropTypes.array.isRequired};

const FooterBlogList = ({list}) => (
  <ul className="list-unstyled">
    {list.map((blog, index) => (
      <li key={index}>
        <h5 className="fs-0 mb-0">
          <Link className="text-400" to="#!">
            {blog.title}
          </Link>
        </h5>
        <p>
          {blog.date} &bull; {blog.read} read{' '}
          {blog.star && <span dangerouslySetInnerHTML={createMarkup('&starf;')} />}
        </p>
      </li>
    ))}
  </ul>
);

FooterBlogList.propTypes = {list: PropTypes.array.isRequired};

const FooterStandard = () => {
  return (
    <Fragment>
      <Section bg="dark" className="pt-8 pb-4">
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
      <Section bg="dark" className="py-0 py-3 border-top border-1000 text-center fs--1">
        <Row className="justify-content-between">
          <Col xs={12} sm="auto">
            <p className="mb-0">
              <br className="d-sm-none" /> {new Date().getFullYear()} &copy;{' '}
              <a
                className="text-700"
                href="https://bellawatt.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bellawatt, Inc.
              </a>
            </p>
          </Col>
          <Col xs={12} sm="auto">
            <p className="mb-0">v{version}</p>
          </Col>
        </Row>
      </Section>
    </Fragment>
  );
};

export default FooterStandard;
