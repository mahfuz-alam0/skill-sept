import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Allcourse from '../Allcourse/Allcourse';

const ByCategory = () => {

    const data = useLoaderData();

    return (
        <div className='container_course'>
            {
                data.map(course => <Allcourse key={course.id} course={course} />)
            }
        </div>
    );
};

export default ByCategory;