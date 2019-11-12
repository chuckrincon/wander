import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Button, Form, Row, Col, FormGroup, Input, CustomInput, Label } from 'reactstrap';
import withRedirect from '../../hoc/withRedirect';

const LoginForm = ({ setRedirect, hasLabel }) => {
  // State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  // Handler
  const handleSubmit = e => {
    e.preventDefault();
    toast.success(`Logged in as ${email}`);
    setRedirect(true);
  };

  useEffect(() => {
    setIsDisabled(!email || !password);
  }, [email, password]);

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        {hasLabel && <Label>Email address</Label>}
        <Input
          placeholder={!hasLabel ? 'Email address' : ''}
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
        />
      </FormGroup>
      <FormGroup>
        {hasLabel && <Label>Password</Label>}
        <Input
          placeholder={!hasLabel ? 'Password' : ''}
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          type="password"
        />
      </FormGroup>
      <Row className="justify-content-between align-items-center">
        <Col xs="auto">
          <CustomInput
            id="customCheckRemember"
            label="Remember me"
            checked={remember}
            onChange={({ target }) => setRemember(target.checked)}
            type="checkbox"
          />
        </Col>
      </Row>
      <FormGroup>
        <Button color="primary" block className="mt-3" disabled={isDisabled}>
          Log in
        </Button>
      </FormGroup>
    </Form>
  );
};

LoginForm.propTypes = {
  setRedirect: PropTypes.func.isRequired,
  layout: PropTypes.string,
  hasLabel: PropTypes.bool
};

LoginForm.defaultProps = {
  layout: 'basic',
  hasLabel: false
};

export default withRedirect(LoginForm);
