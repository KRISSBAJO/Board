import React from 'react';
import HeaderComponent from './HeaderComponent';
import SpacesComponent from './SpacesComponent';
import PickUpComponent from './PickUpComponent';
import DiscoverComponent from './DiscoverComponent';
import NotificationsComponent from './NotificationsComponent';
import QuickLinksComponent from './QuickLinksComponent';
import FeedbackComponent from './FeedbackComponent';
import CollaborationComponent from './TaggingComponent';

import OverviewComponent from './OverviewComponent';
const DocuBoard = () => {
    return (
        <div className="relative p-4 h-full mb-20">

            {/* Header */}
            <HeaderComponent />

            {/* Overview */}
            <OverviewComponent />

            {/* Main Content */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4">
                
                {/* Left column - Spaces (taking 1 out of 5 columns on medium and larger screens) */}
                <div className="bg-white p-4 rounded shadow mb-4 md:mb-0">
                    <SpacesComponent />
                </div>
    
                {/* Middle column - Recent Activity and other cards (taking 3 out of 5 columns on medium and larger screens) */}
                <div className="col-span-3 bg-white p-4 md:p-8 rounded-lg shadow-lg">
                    <div className="bg-white p-4 md:p-6 mb-6 rounded-lg shadow-md">
                        <PickUpComponent />
                    </div>
                    
                    <div className="bg-white p-4 md:p-6 mb-6 rounded-lg shadow-md">
                        <DiscoverComponent />
                    </div>
                <div className="grid grid-cols-1 gap-10 mb-4 items-center md:grid-cols-3 md:justify-items-start">
                    <div className="bg-white p-4 rounded-lg shadow-md md:col-span-1">
                        <NotificationsComponent />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md md:col-span-2">
                        <CollaborationComponent />
                    </div>
                </div>


                </div>
                   
                {/* Right column (taking 1 out of 5 columns on medium and larger screens) */}
                <div className="bg-white p-4 rounded shadow mt-4 md:mt-0">
                    <QuickLinksComponent />
                    <FeedbackComponent />
                </div>
            </div>

           
        </div>
    );
}

export default DocuBoard;
