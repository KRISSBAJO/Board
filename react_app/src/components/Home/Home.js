/* global gapi */

import React, { useEffect } from 'react';

import '../../App.css';
import ActionPage from './ActionPage';
import Pricing from './Pricing';
import HomeSection from './HomeSection';
import DocuCenter from './DocuCenter';
import ProductComponent from './ProductComponent';
import InclusiveComponent from './InclusiveComponent';
import DocCenterComponent from './DocCenterComponent';
import OurPlans from './OurPlans';
import DisplayComponent from './DisplayComponent';
import StoriesComponent from './StoriesComponent';


function Home() {
  return (
    <div className="home-content bg-gray-50  py-12 px-6 lg:px-24">
      <ProductComponent className="mb-10" />
    
      <InclusiveComponent className="mb-20" />
      <DocCenterComponent />
      <DisplayComponent />
      {/* <ActionPage className="mb-10" /> */}
      <StoriesComponent className="mb-10" />
      <Pricing className="mb-10" />
      <HomeSection className="mb-10" />
      <DocuCenter className="mb-10" />
      <OurPlans className="mb-10" />
    </div>
  );
}

export default Home;
