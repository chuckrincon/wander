import React from 'react';
import {Card, CardBody, CardImg, CardTitle} from 'reactstrap';
import cover from '../../../assets/img/properties/antler/cover.png';

const AntlerCard = () => {
  return (
    <Card>
      <CardImg src={cover} top />
      <CardBody>
        <CardTitle tag="h5">Antler A Frame</CardTitle>
        <div className="text-left">
          <p>Cozy A-Frame cabin nestled in the Poconos mountains.</p>
          <p>
            Approximately 2 hours from both NYC and Philadelphia, the Antler A-Frame is the perfect
            escape from the city. Explore what the Poconos have to offer, or just cozy up and
            disconnect.
          </p>
        </div>
        <br />
        <a href="/antler" className="btn btn-lg btn-primary">
          Visit Antler
        </a>
      </CardBody>
    </Card>
  );
};

export default AntlerCard;
