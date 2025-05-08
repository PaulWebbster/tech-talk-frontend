import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

function FeedbackForm() {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="container mt-4">
      <h2>Submit Feedback</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Conference:</label>
          <select className="form-select">
            <option value="cloud-conference-1">Cloud Conference 1</option>
            <option value="cloud-conference-2">Cloud Conference 2</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Rating:</label>
          <ReactStars
            count={5}
            onChange={handleRatingChange}
            size={24}
            activeColor="#ffd700"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Comment:</label>
          <textarea className="form-control" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;