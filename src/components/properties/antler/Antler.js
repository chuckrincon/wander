import React from 'react';
import ContentWithAsideLayout from '../../../layouts/ContentWithAsideLayout';
import ProfileBanner from './ProfileBanner';
import ProfileAside from './ProfileAside';
import ProfileContent from './ProfileContent';
import ProfileFooter from './ProfileFooter';
import NavbarStandard from '../../navbar/NavbarStandard';
import FooterStandard from '../../landing/FooterStandard';

const Antler = () => {
  return (
    <>
      <NavbarStandard />
      <ContentWithAsideLayout banner={<ProfileBanner />} aside={<ProfileAside />} footer={<ProfileFooter />}>
        <ProfileContent />
      </ContentWithAsideLayout>
      <FooterStandard />
    </>
  );
};

export default Antler;
