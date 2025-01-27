import React, { useEffect, useState } from 'react';
import Table from './Table';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/students')
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    const headers = ['ID', 'First Name', 'Last Name', 'Email', 'Enrolled Date'];
    const formattedData = students.map(student => ({
        ID: student.id,
        'First Name': student.first_name,
        'Last Name': student.last_name,
        Email: student.email,
        'Enrolled Date': student.enrolled_date
    }));

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Students</h1>
            <Table headers={headers} data={formattedData} />
        </div>
    );
};

export default StudentList;
