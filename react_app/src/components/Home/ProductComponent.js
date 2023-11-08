import React from 'react';
import docIcon1 from '../../assets/images/docu4.png';
import docIcon2 from '../../assets/images/docu2.png';
import docIcon3 from '../../assets/images/docu5.png'; // Assuming you have a third image for the "Shop Google Store" card
import './ExtraCSS.css';

const ProductComponent = () => {
  return (
    <div className="bg-white p-8">
      <div style={{ position: 'relative' }}>
        <h1 className="doccenter text-5xl font-bold mb-4 text-blue-600 md:mr-0" style={{ marginRight: 'calc(23% - 3rem)' }}>
          <a href="/document-warehouse">DocuCenter</a>
        </h1>
        <h2 className="doccenter text-5xl mb-3 font-semibold md:ml-0" style={{ marginLeft: 'calc(20% - 3rem)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        <span style={{ fontFamily: 'sans-serif' }}>Document warehouse</span>
        <span className="px-2 bg-gray-200 rounded-full">||</span>
        <span className="text-lg font-bold text-blue-600 tracking-wide">Trusted.</span>
        </h2>
      </div>


      <div className="bg-white p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-16 w-full md:w-4/5 lg:w-3/4 mx-auto">
        <div className="relative flex flex-col items-start p-6 bg-gray-100 rounded-lg">
          <img src={docIcon1} alt="Product Support" className="mb-6 w-full rounded-lg shadow-lg" />
          <button className="bg-white rounded-lg shadow flex items-center justify-center px-4 py-2 text-gray-700 hover:bg-gray-100">Securely store and access your company's SOPs.</button>
        </div>

        <div className="relative flex flex-col items-start p-6 bg-gray-100 rounded-lg">
          <img src={docIcon2} alt="Disability Support" className="mb-6 w-full rounded-lg shadow-lg" />
          <button className="bg-white rounded-lg shadow flex items-center justify-center px-4 py-2 text-gray-700 hover:bg-gray-100">A comprehensive knowledge bank for new hires and initiatives.</button>
        </div>

        <div className="relative flex flex-col items-start p-6 bg-gray-100 rounded-lg">
          <img src={docIcon3} alt="Shop Google Store" className="mb-6 w-full rounded-lg shadow-lg" />
          <button className="bg-white rounded-lg shadow flex items-center justify-center px-4 py-2 text-gray-700 hover:bg-gray-100">Centralized repository for operational procedures and policy statements.</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductComponent;
