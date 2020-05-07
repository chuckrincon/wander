import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, CardBody, Col, CustomInput, Label, Row } from 'reactstrap';
import NavbarStandard from '../navbar/NavbarStandard';
import FooterStandard from '../landing/FooterStandard';
import { isIterableArray } from '../../helpers/utils';
import PricingCardForDouble from './PricingCardForDouble';
import pricingAlt from '../../data/pricing/pricingAlt';
import Flex from '../common/Flex';

const Pricing = () => {
  return (
    <>
      <NavbarStandard />
      <Container style={{ marginTop: '90px' }}>
        <Card className="mb-3">
          <CardBody>
            <Row className="justify-content-center">
              <Col xs={12} className="text-center mb-4">
                <div className="fs-1">Wander Pricing</div>
                <h3 className="fs-2 fs-md-3">
                  Awesome with all the basic features. <br className="d-none d-md-block" />
                  Pro plan for advanced users.
                </h3>
              </Col>
              <Col xs={12} lg={8}>
                <Row>
                  {isIterableArray(pricingAlt) &&
                    pricingAlt.map((pricingCard, index) => (
                      <Col xs={12} md key={index}>
                        <PricingCardForDouble {...pricingCard} />
                      </Col>
                    ))}
                </Row>
              </Col>
              <Col xs={12} className="text-center">
                <h5 className="mt-5">
                  To register, please reach out to <a href="mailto:eugene@bellawatt.com">eugene@bellawatt.com</a>.
                </h5>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
      <FooterStandard />
    </>
  );
};

export default Pricing;
