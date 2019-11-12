import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Modal, ModalBody, CardBody, Card } from 'reactstrap';
import NavbarStandard from '../navbar/NavbarStandard';
import FooterStandard from '../landing/FooterStandard';
import Login from '../auth/basic/Login';
import img_login from '../../assets/img/illustrations/creating.png';

const Pricing = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <NavbarStandard />
      <Container style={{ marginTop: '90px', marginBottom: '16px' }}>
        <Card>
          <CardBody className="overflow-hidden p-lg-6">
            <Row className="align-items-center justify-content-between">
              <Col lg={6}>
                <img src={img_login} alt="" className="img-fluid" />
              </Col>
              <Col lg={6} className="pl-lg-4 my-5 text-center text-lg-left">
                <h3>Log in!</h3>
                <p className="lead">
                  Our methodology is proprietary and only available to active customers. Thank you for your
                  understanding.
                </p>
                <Link
                  tag={Link}
                  to="#!"
                  className="btn btn-falcon-primary"
                  onClick={() => setShowLoginModal(!showLoginModal)}
                >
                  Log In
                </Link>
                <Modal isOpen={showLoginModal} centered toggle={() => setShowLoginModal(!showLoginModal)}>
                  <ModalBody className="p-0">
                    <Card>
                      <CardBody className="fs--1 font-weight-normal p-4">
                        <Login />
                      </CardBody>
                    </Card>
                  </ModalBody>
                </Modal>
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
