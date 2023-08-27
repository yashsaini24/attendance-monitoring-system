import React from 'react';

const AttendanceSummary = ({ presentCount, absentCount, onSubmit }) => {
  return (
    <div className="attendance-summary">
      <p>Present: {presentCount}</p>
      <p>Absent: {absentCount}</p>
      <button onClick={onSubmit}>Submit Attendance</button>
    </div>
  );
};

export default AttendanceSummary;
