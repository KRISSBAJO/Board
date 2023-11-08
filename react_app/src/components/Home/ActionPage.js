import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import profilePic1 from '../../assets/images/docu.png';
import profilePic2 from '../../assets/videos/video.png';

const ActionPage = () => {
    useEffect(() => {
        const textElement = document.querySelector('.video-text');
        if (textElement) {
            const words = textElement.innerText.split(' ');
            const lines = [];
            while (words.length) {
                lines.push(words.splice(0, 2).join(' '));
            }
            textElement.innerHTML = lines.map(line => `<div>${line}</div>`).join('');
        }
    }, []);

    return (
        <div className="flex flex-wrap justify-between p-2 bg-white font-poiretOne text-base text-gray-700 shadow-sm">
           <div className="flex items-center bg-white mx-auto p-5 rounded shadow-xs mb-20">
                <div className="flex-1 p-3 ">
                    <h1 className="text-5xl mb-5 text-gray-800">Unified Document Management</h1>
                    <p className="text-lg mb-7 text-gray-500">With DocCenter, simplify and enhance your document workflows in a centralized platform.</p>
                    <Link to="/signup" className="inline-block px-4 py-2 text-sm bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300">Begin Your Organized Journey</Link>
                </div>
                <div className="flex-1 p-5">
                    <img src={profilePic1} alt="Document Illustration" className="w-3/5 max-w-md mx-auto" />
                </div>
            </div>


            <div className="flex flex-col items-center p-10 rounded-lg w-2/3 mx-auto bg-blue-50">
            <h2 className="text-3xl text-center mt-5 mb-7 font-bold border-b-4 ">Discover DocCenter in Action</h2>
            <div className="flex items-center justify-center w-full p-2 rounded-lg mb-8">
            <video controls className="w-full md:w-2/5 mb-7 md:mb-0 md:mr-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <source src={profilePic2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div>
                    <p className="video-text text-3xl text-center mt-5 mb-2 font-bold text-orange-500 break-words md:mt-0">DocCenter: Streamlining document management and collaboration in one unified platform.</p>
                </div>
            </div>
        </div>

        </div>
    );
}

export default ActionPage;

