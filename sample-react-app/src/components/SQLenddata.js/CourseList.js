import React, { useEffect, useState } from 'react';
import Table from './Table';

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/courses')
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching courses:', error));
    }, []);

    const headers = ['ID', 'Name', 'Description'];
    const formattedData = courses.map(course => ({
        ID: course.id,
        Name: course.name,
        Description: course.description
    }));

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Courses</h1>
            <Table headers={headers} data={formattedData} />
        </div>
    );
};

export default CourseList;
