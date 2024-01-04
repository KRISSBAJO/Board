// Reviews.js
import React, { useState } from 'react';
import './Reviews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

const Reviews = () => {
  const [reviewsEnabled, setReviewsEnabled] = useState(true);
  const [reviews, setReviews] = useState([]); // This would be fetched from your backend

  return (
    <div className="reviews-container">
      <div className="manage-reviews">
        <h2>Manage Reviews</h2>
        <div className="enable-reviews">
          <span>Enable Reviews</span>
          <FontAwesomeIcon
            icon={reviewsEnabled ? faToggleOn : faToggleOff}
            onClick={() => setReviewsEnabled(!reviewsEnabled)}
            className={`toggle ${reviewsEnabled ? 'on' : 'off'}`}
          />
        </div>
        <p>Automate review requests and showcase 5-star feedback on your Booking Page.</p>
      </div>
      <div className="reviews-section">
        <h3>Reviews</h3>
        <div className="reviews-list">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="review-item">
                {/* Display review details here */}
              </div>
            ))
          ) : (
            <p>No pending reviews</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
