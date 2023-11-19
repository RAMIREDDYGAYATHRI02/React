import React, { useState } from 'react';
import './App.css';
const MyForm = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  
  const departments = [
    { id: '1', name: 'COMPUTER SCIENCE AND ENGINEERING', teachers: ['Dr. P. Venkata Subba Reddy', 'Dr. Ch. D. V. Subba Rao','	Dr. M. Humera Khanam','Dr. N. Usha Rani'] },
    { id: '2', name: 'ELECTRICAL AND ELECTRONICS ENGINEERING', teachers: ['Dr. S. Narayana Reddy', 'Dr. R.V.S. Satyanarayana','Dr. G. Srinivasulu','Dr. S. Varadarajan'] },
    { id: '3', name: 'ELECTRICAL AND ELECTRONICS ENGINEERING', teachers: ['Dr. M. Damodar Reddy', 'Dr. A. Lakshmi Devi','	Dr. Ch. Chengaiah','Dr. T. Gowri Manohar'] },
    { id: '4', name: 'CIVIL ENGINEERING', teachers: ['Dr. G. N. Pradeep Kumar', 'Dr. K. Mallikarjuna Rao','	Dr. I.V. Ramana Reddy','Dr. M. Srimurali'] },
    { id: '5', name: 'MECHANICAL ENGINEERING', teachers: ['	Dr. G. Bhanodaya Reddy', 'Dr. P. Venkataramaiah','Dr. V. Diwakar Reddy','Dr. K. Rajesh Babu'] },
    { id: '6', name: 'CHEMICAL ENGINEERING', teachers: ['	Dr. P. Akhila Swathantra', 'Dr. B. Sarath Babu','chemical1','chemical2'] },
  ];

  const handleDepartmentChange = (e) => {
    const selectedDepartmentId = e.target.value;
    setSelectedDepartment(selectedDepartmentId);
    // Reset the selected teacher when department changes
    setSelectedTeacher('');
  };

  const handleTeacherChange = (e) => {
    const selectedTeacher = e.target.value;
    setSelectedTeacher(selectedTeacher);
  };

  return (
    <div className='whole-wrapper'>
      {/* First input field - Department */}
      <label className="l1">Select Department:</label>
      <select id="department" value={selectedDepartment} onChange={handleDepartmentChange}>
        <option >Select a Department</option>
        {departments.map(department => (
          <option key={department.id} value={department.id}>{department.name}</option>
        ))}
      </select>

      <br />
      <br />

      {/* Second input field - Teacher */}
      
        <div>
          <label className="l2">Select Teacher:</label>
          <select className="m" id="teacher" value={selectedTeacher} onChange={handleTeacherChange}>
            <option>Select a Teacher</option>
            {departments.find(department => department.id === selectedDepartment)?.teachers.map(teacher => (
              <option key={teacher} value={teacher}>{teacher}</option>
            ))}
          </select>
        </div>
     

      <br />

      {/* Displaying selected values */}
      {/* <p>Selected Department: {selectedDepartment}</p> */}
      <p className="l3">Selected Teacher :{  selectedTeacher}</p>
    </div>
  );
};

export default MyForm;



