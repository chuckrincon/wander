import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Form,
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
import CountUp from 'react-countup';
import CardSummary from './CardSummary';
import PaymentsLineChart from './PaymentsLineChart';
import FalconCardHeader from '../common/FalconCardHeader';

const Dashboard = () => {
  const [pvEscalation, setPvEscalation] = useState(100);
  const [evEscalation, setEvEscalation] = useState(100);
  const [storageEscalation, setStorageEscalation] = useState(100);

  return (
    <>
      <PaymentsLineChart />

      <div className="card-deck">
        <CardSummary rate="-0.23%" title="A Metric" color="warning">
          58.39k
        </CardSummary>
        <CardSummary rate="0.0%" title="Another Metric" color="info">
          73.46k
        </CardSummary>
        <CardSummary content="43,594" rate="9.54%" title="Supporting Metric(s)" color="success">
          <CountUp end={43594} duration={5} prefix="$" separator="," decimal="." />
        </CardSummary>
      </div>
      <Card className="mb-3">
        <FalconCardHeader title="Inputs & Controls" light={false} />
        <CardBody>
          <Form>
            <Row>
              <Col sm={2} className="mb-3">
                <p className="h3">PVs</p>
              </Col>
              <Col sm={5} className="mb-3">
                <FormGroup>
                  <Label for="pv-penetration-today">Today</Label>
                  <InputGroup>
                    <Input
                      type="number"
                      name="pv-penetration"
                      id="pv-penetration-today"
                      placeholder="PV Penetration Today"
                      step="100"
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>kW</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col sm={5} className="mb-3">
                <FormGroup>
                  <Label for="pv-escalation">
                    Escalation Rate
                    <span className={`badge badge-secondary rounded-capsule ml-2`}>{pvEscalation}%</span>
                  </Label>
                  <CustomInput
                    type="range"
                    id="pv-escalation"
                    name="pv-escalation"
                    min="0"
                    max="300"
                    value={pvEscalation}
                    step="10"
                    onChange={e => setPvEscalation(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <hr />

            <Row>
              <Col sm={2} className="mb-3">
                <p className="h3">EVs</p>
              </Col>
              <Col sm={5} className="mb-3">
                <FormGroup>
                  <Label for="pv-penetration-today">Today</Label>
                  <InputGroup>
                    <Input
                      type="number"
                      name="ev-penetration"
                      id="ev-penetration-today"
                      placeholder="PV Penetration Today"
                      step="100"
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>kW</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col sm={5} className="mb-3">
                <FormGroup>
                  <Label for="ev-escalation">
                    Escalation Rate
                    <span className={`badge badge-secondary rounded-capsule ml-2`}>{evEscalation}%</span>
                  </Label>
                  <CustomInput
                    type="range"
                    id="ev-escalation"
                    name="ev-escalation"
                    min="0"
                    max="300"
                    value={evEscalation}
                    step="10"
                    onChange={e => setEvEscalation(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <hr />

            <Row>
              <Col sm={2} className="mb-3">
                <p className="h3">Batteries</p>
              </Col>
              <Col sm={5} className="mb-3">
                <FormGroup>
                  <Label for="storage-penetration-today">Today</Label>
                  <InputGroup>
                    <Input
                      type="number"
                      name="storage-penetration"
                      id="storage-penetration-today"
                      placeholder="PV Penetration Today"
                      step="100"
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>kW</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col sm={5} className="mb-3">
                <FormGroup>
                  <Label for="storage-escalation">
                    Escalation Rate
                    <span className={`badge badge-secondary rounded-capsule ml-2`}>{storageEscalation}%</span>
                  </Label>
                  <CustomInput
                    type="range"
                    id="storage-escalation"
                    name="storage-escalation"
                    min="0"
                    max="300"
                    value={storageEscalation}
                    step="10"
                    onChange={e => setStorageEscalation(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <hr />
          </Form>
        </CardBody>
      </Card>

      <Card className="mb-3">
        <FalconCardHeader title="Utility Info" light={false} />
        <CardBody>
          <Form>
            <Row>
              <Col sm="6">
                <Label for="avoided_cost">Avoided Cost</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                  <Input id="avoided_cost" type="number" step="1" />
                  <InputGroupAddon addonType="append">/kWh</InputGroupAddon>
                </InputGroup>
              </Col>
              <Col sm="6">
                <Label for="rev_requirement">Revenue Requirement</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                  <Input id="rev_requirement" type="number" step="1" />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                </InputGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default Dashboard;
