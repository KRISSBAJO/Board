import React from 'react';
import docIcon1 from '../../assets/images/docu1.png';
import docIcon2 from '../../assets/images/docu2.png';
import './DocuCenter.css';
import spiralImage from '../../assets/images/spiral.svg'; 
import spiralImage2 from '../../assets/images/spiral2.svg'; 

const DocuCenter = () => {
  return (
    <div className="flex flex-col items-center justify-center max-h-128 p-4 sm:p-8 md:p-10 lg:p-12 custom-gradient space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 mt-10 sm:mt-20 md:mt-40 lg:mt-48 mb-10 sm:mb-20 md:mb-40 lg:mb-48 w-full sm:w-4/5 md:w-3/4 mx-auto shadow-lg">
      <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 space-x-0 sm:space-x-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl italic font-bold shadow-text z-10 text-center">
            We love it here at DocuCenter
        </h1>
      </div>

      <div className="flex flex-wrap space-x-4 sm:space-x-8 md:space-x-12 justify-center">
        <img
          src={spiralImage}
          alt="Document Icon 1"
          className="w-24 sm:w-32 md:w-40 lg:w-48 h-20 sm:h-28 md:h-32 lg:h-40 rounded-r-full transform transition-transform duration-300 hover:scale-110 filter brightness-110%"
        />
        <img
          src={spiralImage2}
          alt="Document Icon 2"
          className="w-24 sm:w-32 md:w-40 lg:w-48 h-20 sm:h-28 md:h-32 lg:h-40 rounded-full transform transition-transform duration-300 hover:scale-110 "
        />
      </div>
    </div>
  );
};

export default DocuCenter;






