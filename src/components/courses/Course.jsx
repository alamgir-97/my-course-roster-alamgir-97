import React from 'react';

const Course = () => {
    return (
        <div className='bg-white  rounded-3xl'>
            <div className='bg-white m-6'>
            <img src="./Rectangle 2.png" alt="" className='w-full mb-2'></img>
            <h2 className='text-lg font-semibold py-3'>Introduction to C Programming</h2>
            <p className='text-base font-normal leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, libero soluta, mollitia quia totam repudiandae facere reprehenderit, commodi rerum delectus id sit tempore .</p>
            <div className='flex justify-between py-6'><p className='text-base font-medium'>Price:15000</p> <p className='text-base font-medium'>Credit: 1hr</p></div>
            <button className='text-lg font-semibold rounded-md bg-blue-700 w-full text-white py-2'>Select</button>
            </div>
        </div>
    );
};

export default Course;