import { useState } from 'react';
import QuickStartComponent from './QuickStartComponent'; 
import { ReactComponent as Submit } from '../../../assets/images/submit.svg'; 

const FeedbackComponent = () => {
    const [feedback, setFeedback] = useState('');
    const [feedbackType, setFeedbackType] = useState('General Feedback');
    const [feedbackStatus, setFeedbackStatus] = useState(null);
    const [attachment, setAttachment] = useState(null);

    const maxChars = 500;  // Maximum characters allowed in feedback

    const handleSubmit = (e) => {
        e.preventDefault();
        if(feedback) {
            console.log('Feedback submitted:', feedback);
            setFeedback('');
            setFeedbackStatus('Feedback successfully submitted!');
        } else {
            setFeedbackStatus('Please enter feedback before submitting.');
        }
    };

    const handleAttachment = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAttachment(file);
        }
    };

    return (
        <div className="bg-white grid-cols-1 p-4 md:p-6 rounded-lg shadow md:justify-between">
        <div className="md:w-2/3"> {/* This div wraps the actual feedback form */}
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Feedback/Suggestions</h3>
            {feedbackStatus && <div className="mb-4 p-2 bg-green-200 text-sm text-green-700 rounded">{feedbackStatus}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium">Feedback Type</label>
                    <select 
                        className="w-full p-2 rounded border text-sm focus:outline-none focus:ring focus:border-blue-300"
                        value={feedbackType}
                        onChange={e => setFeedbackType(e.target.value)}
                    >
                        <option value="General Feedback">General Feedback</option>
                        <option value="Bug Report">Bug Report</option>
                        <option value="Feature Request">Feature Request</option>
                    </select>
                </div>
                <div className="mb-4 relative">
                    <textarea
                        className="w-full p-2 rounded border focus:outline-none focus:ring focus:border-blue-300 resize-none"
                        rows="4"
                        maxLength={maxChars}
                        placeholder="Share your thoughts..."
                        value={feedback}
                        onChange={e => setFeedback(e.target.value)}
                    ></textarea>
                    <div className="absolute right-2 bottom-2 text-gray-500">{feedback.length}/{maxChars}</div>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium">Attach a screenshot or file <span className='text-blue-300'>(optional)</span></label>
                    <input type="file" onChange={handleAttachment} />
                </div>
                <button className="px-2 py-2 bg-slate-50 text-white rounded hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-700">
                <Submit 
                         className="text-blue-600 bg-slate-300 hover:text-blue-700 focus:text-blue-700 rounded-md px-2 py-1 transition duration-300 ease-in-out transform hover:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60" 
                        aria-label="Edit" 
                        role="button" 
                        title="Submit"
                        tabIndex="0"
                    />
                </button>
                </form>
        </div>
        
        {/* QuickStart Component */}
        <div className="mt-4 md:mt-0 md:w-1/3">
            <QuickStartComponent />
        </div>
    </div>
);
}

export default FeedbackComponent;
