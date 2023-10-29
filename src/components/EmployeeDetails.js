// src/components/EmployeeDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetch the details of the selected employee based on 'id'
    fetch(`http://localhost:8000/employees/${id}/`)
      .then((response) => response.json())
      .then((data) => setEmployee(data));

    // Fetch the skills of the selected employee
    fetch(`http://localhost:8000/employees/${id}/skills/`)
      .then((response) => response.json())
      .then((data) => setSkills(data));
  }, [id]);

  return (
    <div>
      {employee && (
        <div>
          <h2>Name: {employee.name}</h2>
          <p>Position: {employee.position}</p>
          <img src="avatar_url_here" alt="Employee Avatar" />
        </div>
      )}

      <h3>Skills:</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            {skill.name} (Level {skill.level})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeDetails;
