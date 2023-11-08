import React from 'react';
import { Link } from 'react-router-dom';
import docIcon3 from '../../assets/images/case2.png';
import docIcon2 from '../../assets/images/chris.jpeg'; 
import docIcon1 from '../../assets/images/gerry.jpg';  

const StoryCard = ({ path, imageSrc, altText, title, description }) => (
    <Link to={path} className="w-full md:w-1/2 lg:w-1/3 bg-white shadow-md hover:border-gray-300 relative hover:shadow-xl transition-all duration-300 cursor-pointer mb-6">
      <img className="w-full h-56 object-cover rounded-t-md" src={imageSrc} alt={altText} />
      <div className="p-6">
        <h3 className="font-semibold mb-4 text-xl">{title}</h3>
        <p className="mb-4 text-base">{description}</p>
        <span className="absolute bottom-4 right-4 bg-black text-white text-xs py-1 px-3 rounded-full">3-MINUTE READ</span>
      </div>
    </Link>
);

const EmptyCard = ({ title, description }) => (
  <div className="md:w-1/2 lg:w-1/3 bg-gray-100 hover:bg-gray-200 rounded-md text-black p-6 relative hover:shadow-xl transition-all duration-300 cursor-pointer mb-6">
    <h3 className="text-2xl font-semibold mb-4 leading-tight">{title}</h3>
    <p className="text-left mb-6">{description}</p>
    <span className="absolute bottom-4 right-4 bg-white text-gray-800 text-xs py-1 px-3 rounded-full border border-gray-400">3-MINUTE READ</span>
  </div>
);

const StoriesComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-10 mt-10 bg-gradient-to-r from-gray-100 to-gray-200">
        <h1 className="text-5xl font-bold mb-6">Our Story</h1>
        <hr className="w-1/4 mb-10 border-gray-400" />
        <p className="text-xl mb-10 text-center max-w-3xl">
            DocCenter is a product of Logaxp, a leading provider of enterprise software solutions.
        </p>
        <div className="flex flex-wrap justify-center max-w-6xl mx-auto gap-16">
            <StoryCard 
              path="/story1" 
              imageSrc={docIcon2} 
              altText="Inclusive Innovations" 
              title="Embracing Diversity" 
              description="Our dedication to ensuring an inclusive tech environment."
            />
            <StoryCard 
              path="/story2" 
              imageSrc={docIcon3} 
              altText="Sustainability Drive" 
              title="Green Tech Initiatives" 
              description="Pushing the boundaries of innovation sustainably."
            />
            <StoryCard 
              path="/story3" 
              imageSrc={docIcon1} 
              altText="Latest Tech News" 
              title="Tech Revolution" 
              description="Staying ahead with cutting-edge technological advancements."
            />
          <EmptyCard 
  title="LogaXP: A Symphony of Technology, Teamwork, and Triumph!" 
  description="Inspired by Nashville's vibrant spirit of innovation, LogaXP is a harmonious blend of Logic, Gathering, and Experience. Beyond just a brand, it stands as a tribute to the trailblazing trio: Christopher, Patience, and Gerald. Their journey is a narrative of technological zeal, collective commitment, and unyielding passion. Dive deeper into our story and discover the essence of LogaXP." 
/>

        </div>
    </div>
  );
}

export default StoriesComponent;
