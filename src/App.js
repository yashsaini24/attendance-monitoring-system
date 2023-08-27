import React, { useState } from 'react';
import Header from './components/Header';
import StudentCard from './components/StudentCard';
import AttendanceSummary from './components/AttendanceSummary';
import ConfirmationModal from './components/ConfirmationModal';
import data from './data'; // Example student data

const App = () => {
  const [students, setStudents] = useState(data);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleAttendance = (id) => {
    setStudents(prevStudents => prevStudents.map(student =>
      student.id === id ? { ...student, attendance: !student.attendance } : student
    ));
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const submitAttendance = () => {
    // Logic to handle attendance submission
    closeModal();
  };

  const presentCount = students.filter(student => student.attendance).length;
  const absentCount = students.length - presentCount;

  return (
    <div className="app">
      <Header />
      <div className="student-list">
        {students.map(student => (
          <StudentCard
            key={student.id}
            student={student}
            onToggle={toggleAttendance}
          />
        ))}
      </div>
      <AttendanceSummary
        presentCount={presentCount}
        absentCount={absentCount}
        onSubmit={openModal}
      />
      <ConfirmationModal
        isOpen={modalOpen}
        onClose={closeModal}
        onSubmit={submitAttendance}
      />
    </div>
  );
};

export default App;
