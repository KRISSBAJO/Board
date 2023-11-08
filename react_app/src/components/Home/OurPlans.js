import React from 'react';

const OurPlan = () => {
  return (
    <section className="bg-gradient-to-r from-slate-100 to-slate-300 text-gray-700 py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
      <h1 className="text-5xl font-extrabold mb-4 leading-tight">Elevate Your Document Experience</h1>
<p className="text-xl mb-8 font-medium">Dive into a world where organizing, accessing, and managing your documents becomes a breeze. Experience bespoke solutions crafted just for you.</p>

        <button className="bg-black text-white border py-3 px-6 rounded-full font-bold hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-transform transform hover:scale-105">
          Discover Your Plan
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-white rounded-t-3xl shadow-lg transform skew-y-6"></div>
    </section>
  );
};

export default OurPlan;
