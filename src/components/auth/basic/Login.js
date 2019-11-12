import React, { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import LoginForm from '../LoginForm';

const Login = () => (
  <Fragment>
    <Row className="text-left justify-content-between">
      <Col xs="auto">
        <h5>Log in</h5>
      </Col>
    </Row>
    <br />
    <LoginForm />
  </Fragment>
);

export default Login;
