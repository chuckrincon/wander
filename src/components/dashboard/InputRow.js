import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  CustomInput,
  Row,
  Col
} from 'reactstrap';

const InputRow = ({ name, penetration, escalation, setPenetration, setEscalation }) => {
  const id = name.toLowerCase();
  return (
    <Row>
      <Col sm={2} className="mb-3">
        <p className="h3">{name}</p>
      </Col>
      <Col sm={5} className="mb-3">
        <FormGroup>
          <Label for={id + '_penetration_today'}>Today</Label>
          <InputGroup>
            <Input
              type="number"
              name={id + ' penetration today'}
              id={id + '_penetration_today'}
              step="100"
              value={penetration}
              onChange={e => setPenetration(e.target.value)}
            />
            <InputGroupAddon addonType="append">
              <InputGroupText>kW</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </Col>
      <Col sm={5} className="mb-3">
        <FormGroup>
          <Label for={id + '_escalation_today'}>
            Escalation Rate
            <span className={`badge badge-secondary rounded-capsule ml-2`}>{escalation}%</span>
          </Label>
          <CustomInput
            type="range"
            name={id + ' escalation today'}
            id={id + '_escalation_today'}
            min="0"
            max="300"
            value={escalation}
            step="10"
            onChange={e => setEscalation(e.target.value)}
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default InputRow;

InputRow.propTypes = {
  name: PropTypes.string,
  penetration: PropTypes.number,
  escalation: PropTypes.number,
  setPenetration: PropTypes.func,
  setEscalation: PropTypes.func
};
