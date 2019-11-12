import React, { useState } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import { usage, loadFactor, billImpacts } from '../../data/dashboard/billImpacts';
import CustomInput from 'reactstrap/es/CustomInput';
import { rgbaColor } from '../../helpers/utils';

const OPTIONS = {
  totalBillImpact: 'Total Bill Impact',
  percentBillImpact: 'Percent Bill Impact',
  loadFactor: 'Bill Impact by Load Factor'
};

const BillImpactsChart = () => {
  const [showData, setShowData] = useState('totalBillImpact');

  const config = {
    data: {
      labels: showData === 'loadFactor' ? loadFactor : usage,
      datasets: [
        {
          borderWidth: 2,
          borderColor: rgbaColor('#fff', 0.8),
          backgroundColor: rgbaColor('#fff', 0.15),
          data: billImpacts[showData].map(d => (d * 3.14).toFixed(2))
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
          label: tooltipItem => `${tooltipItem.yLabel} USD`,
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
        yAxes: [
          {
            display: true,
            ticks: {
              fontColor: rgbaColor('#fff', 0.7),
              fontStyle: 600,
              beginAtZero: true,
              suggestedMax: 100
            },
            gridLines: {
              color: rgbaColor('#fff', 0.1),
              lineWidth: 1
            }
          }
        ]
      }
    }
  };

  return (
    <Card className="mb-3">
      <CardBody className="rounded-soft bg-gradient">
        <Row className="text-white align-items-center no-gutters">
          <Col>
            <h4 className="text-white mb-0">Average 14.1%</h4>
            <p className="fs--1 font-weight-semi-bold">
              Median <span className="text-300">13.5%</span>
            </p>
          </Col>
          <Col xs="auto" className="d-none d-sm-block">
            <CustomInput
              id="ddd"
              type="select"
              bsSize="sm"
              className="mb-3 shadow"
              value={showData}
              onChange={({ target }) => setShowData(target.value)}
            >
              {Object.keys(OPTIONS).map(optionKey => {
                return (
                  <option key={optionKey} value={optionKey}>
                    {OPTIONS[optionKey]}
                  </option>
                );
              })}
            </CustomInput>
          </Col>
        </Row>
        <Line data={config.data} options={config.options} width={1618} height={500} />
      </CardBody>
    </Card>
  );
};

export default BillImpactsChart;
