import React from 'react';

function FeedbackForm() {
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
          <input type="number" className="form-control" min="1" max="5" required />
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