import React from 'react';

const Pricing = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-5 space-y-10">
            <h1 className="text-3xl font-semibold mb-8 text-center">Scaling Costs for Growing Ambitions</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">

                {/* Free Plan */}
                <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-2xl font-bold mb-10 border-b-2 border-gray-300 py-2">Free</h2>
                    <div className="text-3xl font-bold mb-2">USD 0.05</div>
                    <div className="text-gray-600 mb-14">per user/month</div>
                   
                    <button className="bg-gray-50  border border-spacing-8 text-balck font-bold border-black rounded-2xl px-8 py-2 mb-4 hover:bg-white transition-colors duration-300">Start trial</button>
                    <p className="text-gray-500">Free for 7 days</p>
                    <p className="text-gray-500">No credit card needed</p>
                </div>

                {/* Standard Plan */}
                <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-2xl font-bold mb-10 border-b-2 border-gray-300 py-2 ">Standard</h2>
                    <div className="text-3xl font-bold mb-2">USD 2.05</div>
                    <div className="text-gray-600 mb-14">per user/month</div>
                 
                    <button className="bg-gray-50  border border-spacing-8 text-balck font-bold border-black rounded-2xl px-8 py-2 mb-4 hover:bg-white transition-colors duration-300">Start trial</button>
                    <p className="text-gray-500">Free for 7 days</p>
                    <p className="text-gray-500">No credit card needed</p>
                </div>

                {/* Premium Plan */}
                <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-2xl font-bold mb-10 border-b-2 border-gray-300 py-2">Premium</h2>
                    <div className="text-3xl font-bold mb-2">USD 7.55</div>
                    <div className="text-gray-600 mb-14">per user/month</div>
                   
                    <button className="bg-gray-50  border border-spacing-8 text-balck font-bold border-black rounded-2xl px-8 py-2 mb-4 hover:bg-white transition-colors duration-300">Start trial</button>
                    <p className="text-gray-500">Free for 7 days</p>
                    <p className="text-gray-500">No credit card needed</p>
                </div>

            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg py-5 px-6 md:px-40 text-center">
            <p className="text-gray-600"> Enjoy special discounts! <a href="#" className="underline text-blue-500 hover:text-blue-600">See your savings</a></p>
            </div>
        </div>
    );
}

export default Pricing;
