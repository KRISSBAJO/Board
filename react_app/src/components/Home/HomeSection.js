import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/doc5.png';
import image2 from '../../assets/images/doc4.png';
import image3 from '../../assets/images/doc6.png';
import image4 from '../../assets/images/doc7.png';


const HomeSection = () => {
  return (
    <section className="flex flex-col md:flex-row p-10 justify-center">
      {/* Banner Section */}
      <div className="banner-section flex flex-col items-center max-w-lg justify-center space-y-3 border-r-8 md:border-brown-500 p-4 bg-gray-100 shadow-xl rounded-l-xl md:mr-12 mb-4 md:mb-0">
        <span className="text-5xl md:text-8xl text-blue-500 font-bold border-b-2 border-gray-400 pb-3">#1</span>
        <h2 className="text-2xl md:text-3xl text-center font-bold mb-3 text-blue-800">DocCenter: Your Trusted Document Hub</h2>
        <p className="text-center font-medium">Endorsed by AOG and trusted by teams across methodologies such as Agile, DevOps, and Waterfall.</p>
        <p className="text-center mt-2">Perfect for storing SOPs, manuals, and essential documentation with ease.</p>
        <footer className="text-sm italic mt-4">*2023 State of Ducument Report</footer>
      </div>


    
      {/* Four Sections on the right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

   {/* Card 1 */}
   <div className="feature-card flex border max-w-lg border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden">
    <img src={image1} alt="LogaXP Document Management" className="w-1/3 h-full rounded-l-lg object-cover" />
    <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Document Organization</h3>
        <p className="text-gray-700 flex-grow">Organize your documents effortlessly with advanced categorization features.</p>
        <Link to="/document-organization" className="text-blue-600 hover:text-blue-800 font-medium ">Explore Document Organization &rarr;</Link>
    </div>
</div>

{/* Card 2 */}
<div className="feature-card flex border border-gray-300 max-w-lg rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden">
    <img src={image2} alt="LogaXP Secure Storage" className="w-1/3 h-full object-cover" />
    <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Secure Storage</h3>
        <p className="text-gray-700 flex-grow">Ensure the safety of your documents with our encrypted storage solutions.</p>
        <Link to="/secure-storage" className="text-blue-600 hover:text-blue-800 font-medium">Learn about Security &rarr;</Link>
    </div>
</div>

{/* Card 3 */}
<div className="feature-card flex border max-w-lg border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden">
    <img src={image3} alt="LogaXP Collaboration" className="w-1/3 h-full object-cover" />
    <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Collaboration Features</h3>
        <p className="text-gray-700 flex-grow">Collaborate in real-time, share documents, and track changes with ease.</p>
        <Link to="/collaboration" className="text-blue-600 hover:text-blue-800 font-medium ">Collaboration Tools &rarr;</Link>
    </div>
</div>

{/* Card 4 */}
<div className="feature-card flex border max-w-lg border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden">
    <img src={image4} alt="LogaXP Accessibility" className="w-1/3 h-full object-cover" />
    <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Easy Accessibility</h3>
        <p className="text-gray-700 flex-grow">Access your documents anytime, anywhere, from any device.</p>
        <Link to="/accessibility" className="text-blue-600 hover:text-blue-800 font-medium ">Access Features &rarr;</Link>
    </div>
</div>
</div>







    </section>
  );
};

export default HomeSection;
