import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Allcourse from './Allcourse/Allcourse';
import './Course.css';

const Course = () => {

    const data = useLoaderData();

    return (
        <div className='container_course'>
            {
                data.map(course => <Allcourse key={course.id} course={course} />)
            }
        </div>
    );
};

export default Course;