import React, { useState } from 'react';
import { Card, CardBody, Form, Label, Input, InputGroup, InputGroupAddon, Row, Col } from 'reactstrap';
import CountUp from 'react-countup';
import CardSummary from './CardSummary';
import BillImpactsChart from './BillImpactsChart';
import FalconCardHeader from '../common/FalconCardHeader';
import InputRow from './InputRow';

const Dashboard = () => {
  const [pvPenetration, setPvPenetration] = useState(900);
  const [pvEscalation, setPvEscalation] = useState(100);

  const [evPenetration, setEvPenetration] = useState(600);
  const [evEscalation, setEvEscalation] = useState(100);

  const [batteryPenetration, setBatteryPenetration] = useState(200);
  const [batteryEscalation, setBatteryEscalation] = useState(100);

  return (
    <>
      <BillImpactsChart />
      <Card className="mb-3">
        <FalconCardHeader title="Inputs & Controls" light={false} />
        <CardBody>
          <Form>
            <InputRow
              name="PVs"
              penetration={pvPenetration}
              escalation={pvEscalation}
              setPenetration={setPvPenetration}
              setEscalation={setPvEscalation}
            />
            <hr />
            <InputRow
              name="EVs"
              penetration={evPenetration}
              escalation={evEscalation}
              setPenetration={setEvPenetration}
              setEscalation={setEvEscalation}
            />
            <hr />
            <InputRow
              name="Batteries"
              penetration={batteryPenetration}
              escalation={batteryEscalation}
              setPenetration={setBatteryPenetration}
              setEscalation={setBatteryEscalation}
            />
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
                  <Input id="avoided_cost" type="number" step="0.0001" />
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
    </>
  );
};

export default Dashboard;
