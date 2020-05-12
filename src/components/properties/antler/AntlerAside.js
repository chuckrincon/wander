import React from 'react';
import {Card, CardBody, Row, Col} from 'reactstrap';
import FalconCardHeader from '../../common/FalconCardHeader';
import ig from '../../../assets/img/instagram.svg';
import airbnb from '../../../assets/img/airbnb.svg';
import CompanySummary from '../../CompanySummary/CompanySummary';

const ProfileAside = () => {
  return (
    <Card>
      <FalconCardHeader title="Explore" />
      <CardBody>
        <Row>
          <Col>
            <CompanySummary
              imgSrc={airbnb}
              headline="Airbnb"
              divider={false}
              description={
                <span>
                  Superhost <br />
                  4.8 stars
                </span>
              }
              to="https://www.instagram.com/antleraframe/"
            />
            <CompanySummary
              imgSrc={ig}
              headline="Instagram"
              divider={false}
              description={<span>700 followers</span>}
              to="https://www.instagram.com/antleraframe/"
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ProfileAside;
