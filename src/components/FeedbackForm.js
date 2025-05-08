import React from 'react';

function FeedbackForm() {
  return (
    <div>
      <h2>Submit Feedback</h2>
      <form>
        <div>
          <label>Conference:</label>
          <select>
            <option value="cloud-conference-1">Cloud Conference 1</option>
            <option value="cloud-conference-2">Cloud Conference 2</option>
          </select>
        </div>
        <div>
          <label>Rating:</label>
          <input type="number" min="1" max="5" required />
        </div>
        <div>
          <label>Comment:</label>
          <textarea required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm; 