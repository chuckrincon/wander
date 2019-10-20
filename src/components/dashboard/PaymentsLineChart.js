import React, { useState } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import { hours, paymentByStatus } from '../../data/dashboard/payments';
import CustomInput from 'reactstrap/es/CustomInput';
import { rgbaColor } from '../../helpers/utils';

const PaymentsLineChart = () => {
  const [paymentStatus, setPaymentStatus] = useState('successful');

  const config = {
    data: {
      labels: hours.map(l => l.substring(0, l.length - 3)),
      datasets: [
        {
          borderWidth: 2,
          borderColor: rgbaColor('#fff', 0.8),
          backgroundColor: rgbaColor('#fff', 0.15),
          data: paymentByStatus[paymentStatus].map(d => (d * 3.14).toFixed(2))
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      tooltips: {
        mode: 'x-axis',
        xPadding: 20,
        yPadding: 10,
        displayColors: false,
        callbacks: {
          label: tooltipItem => `${hours[tooltipItem.index]} - ${tooltipItem.yLabel} USD`,
          title: () => null
        }
      },
      hover: {
        mode: 'label'
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              show: true,
              labelString: 'Month'
            },
            ticks: {
              fontColor: rgbaColor('#fff', 0.7),
              fontStyle: 600
            },
            gridLines: {
              color: rgbaColor('#fff', 0.1),
              lineWidth: 1
            }
          }
        ],
        yAxes: [{ display: false }]
      }
    }
  };

  return (
    <Card className="mb-3">
      <CardBody className="rounded-soft bg-gradient">
        <Row className="text-white align-items-center no-gutters">
          <Col>
            <h4 className="text-white mb-0">Today $764.39</h4>
            <p className="fs--1 font-weight-semi-bold">
              Yesterday <span className="text-300">$684.87</span>
            </p>
          </Col>
          <Col xs="auto" className="d-none d-sm-block">
            <CustomInput
              id="ddd"
              type="select"
              bsSize="sm"
              className="mb-3 shadow"
              value={paymentStatus}
              onChange={({ target }) => setPaymentStatus(target.value)}
            >
              <option value="all">All Payments</option>
              <option value="successful">Successful Payments</option>
              <option value="failed">Failed Payments</option>
            </CustomInput>
          </Col>
        </Row>
        <Line data={config.data} options={config.options} width={1618} height={375} />
      </CardBody>
    </Card>
  );
};

export default PaymentsLineChart;
