import React from 'react';
import ItemBanner from '../../item/ItemBanner';
import cover from '../../../assets/img/properties/antler/cover.png';
import top from '../../../assets/img/properties/antler/6.png';

const ProfileBanner = () => (
  <ItemBanner>
    <ItemBanner.Header avatarSrc={cover} coverSrc={top} />
    <ItemBanner.Body name="Antler A Frame" headline="Pocono Mountain" location="New York, USA" />
  </ItemBanner>
);

export default ProfileBanner;
