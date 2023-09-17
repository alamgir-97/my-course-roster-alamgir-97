import React from 'react';

const Course = ({course}) => {
    console.log(course);
    const {img, course_name, details, price, credit } = course;
   
   
    return (
        <div className='bg-white  rounded-3xl w-80'>
            <div className='bg-white m-6'>
            <img src="https://ibb.co/54YnLF7" alt="" className='w-full mb-2'></img>
            <h2 className='text-lg font-semibold py-3'>{course_name}</h2>
            <p className='text-base font-normal leading-6'> {details}</p>
            <div className='flex justify-between py-6'><p className='text-base font-medium'><span>$</span> Price: {price}</p> <p className='text-base font-medium'><span>$</span>Credit: {credit}hr</p></div>
            <button className='text-lg font-semibold rounded-md bg-blue-700 w-full text-white py-2'>Select</button>
            </div>
        </div>
    );
};

export default Course;