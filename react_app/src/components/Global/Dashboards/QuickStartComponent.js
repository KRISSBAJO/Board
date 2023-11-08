import React from 'react';
import spiralImage2 from '../../../assets/images/spiral.svg';

const QuickStartComponent = () => {
    return (
        <div className="relative w-64 h-64 rounded-lg  hover:shadow-xl transition-shadow duration-300">
            
            {/* Image */}
            <img src={spiralImage2} alt="Spiral" className="absolute top-3 right-0 w-26 h-28 object-cover" />

            {/* Text */}
            <div className="flex flex-col justify-center ml-4  h-full">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Quickstart</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                    Your helpful guide<br /> to getting started.<br />
                    Dive in to explore the<br />
                    essentials.
                </p>


            </div>

            {/* Hover Interaction */}
            <div className="absolute inset-0 transition-opacity opacity-0 hover:opacity-50 bg-gradient-to-t from-blue-400 to-transparent" onClick={() => console.log('Quickstart clicked')}></div>
        </div>
    );
}


export default QuickStartComponent;
