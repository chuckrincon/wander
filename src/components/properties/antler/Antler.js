import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardBody, Row, Col} from 'reactstrap';
import ContentWithAsideLayout from '../../../layouts/ContentWithAsideLayout';
import AntlerBanner from './AntlerBanner';
import AntlerAside from './AntlerAside';

import NavbarStandard from '../../navbar/NavbarStandard';
import FooterStandard from '../../landing/FooterStandard';
import LightBoxGallery from '../../common/LightBoxGallery';
import FalconCardHeader from '../../common/FalconCardHeader';

import gallery from '../../../data/profile/antler';

const GalleryItem = ({index, gallery, onClick}) => (
  <img
    className="rounded w-100 cursor-pointer"
    src={gallery[index]}
    alt=""
    onClick={() => {
      onClick(index);
    }}
  />
);

GalleryItem.propTypes = {
  index: PropTypes.number.isRequired,
  gallery: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Antler = () => {
  return (
    <>
      <NavbarStandard />
      <ContentWithAsideLayout banner={<AntlerBanner />} aside={<AntlerAside />}>
        <Card>
          <FalconCardHeader title="About" />
          <CardBody>
            <p>Cozy A-Frame cabin nestled in the Poconos mountains.</p>
            <p>
              Approximately 2 hours from both NYC and Philadelphia, the Antler A-Frame is the
              perfect escape from the city. Explore what the Poconos have to offer, or just cozy up
              and disconnect.
            </p>
          </CardBody>
        </Card>

        <LightBoxGallery images={gallery}>
          {openImgIndex => (
            <Card className="mt-4">
              <FalconCardHeader title="Photos" />
              <CardBody>
                <Row noGutters className="m-n1">
                  <Col xs={6} className="p-1">
                    <GalleryItem index={0} gallery={gallery} onClick={openImgIndex} />
                  </Col>
                  <Col xs={6} className="p-1">
                    <GalleryItem index={1} gallery={gallery} onClick={openImgIndex} />
                  </Col>
                  <Col xs={4} className="p-1">
                    <GalleryItem index={2} gallery={gallery} onClick={openImgIndex} />
                  </Col>
                  <Col xs={4} className="p-1">
                    <GalleryItem index={3} gallery={gallery} onClick={openImgIndex} />
                  </Col>
                  <Col xs={4} className="p-1">
                    <GalleryItem index={4} gallery={gallery} onClick={openImgIndex} />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          )}
          {/* <ProfileContent /> */}
        </LightBoxGallery>
      </ContentWithAsideLayout>
      <FooterStandard />
    </>
  );
};

export default Antler;
