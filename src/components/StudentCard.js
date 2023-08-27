import React from 'react';

const StudentCard = ({ student, onToggle }) => {
  return (
    <div className="student-card">
      <img src={student.profilePicture} alt={student.name} />
      <h3>{student.name}</h3>
      <label className="switch">
        <input type="checkbox" checked={student.attendance} onChange={() => onToggle(student.id)} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default StudentCard;
