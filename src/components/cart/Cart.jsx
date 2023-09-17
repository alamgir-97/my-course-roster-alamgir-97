import React from 'react';

const Cart = ({selectedCourses, remainingCredit, coursePrice, credit}) => {
    // console.log(selectedCourses);    

    return (
        <div className='bg-white rounded-3xl w-80'>
            <div className='bg-white m-6'>
            <h2 className='text-lg font-semibold py-3'>Credit Hour Remaining {remainingCredit} hr</h2>
            <hr></hr>
            
            <h2 className='text-lg font-semibold py-3'>Course Name:</h2>
            
                {selectedCourses.map(item =>(<ol><li>{item.course_name}</li></ol>))
                
                }
               
            
            <hr></hr>
            <h3>Total Credit Hour:{credit}</h3>
            <hr></hr>
            <h2>Total Price: {coursePrice} USD</h2>            
           
            </div>
        </div>
    );
};

export default Cart;