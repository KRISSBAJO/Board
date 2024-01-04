/* global gapi */

import React, { useEffect } from 'react';

import '../../App.css';

import Pricing from './Pricing';
import HomeSection from './HomeSection';
import DocuCenter from './DocuCenter';
import ProductComponent from './ProductComponent';
import InclusiveComponent from './InclusiveComponent';
import DocCenterComponent from './DocCenterComponent';
import OurPlans from './OurPlans';
import DisplayComponent from './DisplayComponent';
import StoriesComponent from './StoriesComponent';
import JoinUs from '../Global/JoinUs';
import CategoryComponent from '../Global/Dashboards/CategoryComponent';


function Home({ showJoinModal, toggleJoinModal }) {
  return (
    <>
     <CategoryComponent />
     <ProductComponent className="mb-10" />
    <div className="home-content  py-12 px-6 lg:px-24">
     
     
      {/* Conditionally render JoinUs as a modal */}
      {showJoinModal && (
          <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
            <div className="relative p-2 bg- w-full max-w-md m-auto flex-col flex rounded-lg shadow-xl">
              <button 
                onClick={toggleJoinModal} 
                className="absolute top-0 right-0 p-4 text-white font-bold"
                aria-label="Close"
              >
                {/* You can use an X icon or similar to represent close */}
                X
              </button>
              <JoinUs />
            </div>
          </div>
        )}
      <InclusiveComponent className="mb-20" />
      <DocCenterComponent />
      {/* <DisplayComponent /> */}
      {/* <ActionPage className="mb-10" /> */}
      <StoriesComponent className="mb-10" />
      <Pricing className="mb-10" />
      <HomeSection className="mb-10" />
      <DocuCenter className="mb-10" />
      <OurPlans className="mb-10" />
    </div>
    </>
  );
}

export default Home;
