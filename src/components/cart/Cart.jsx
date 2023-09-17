import React from 'react';

const Cart = () => {
    return (
        <div className='bg-white rounded-3xl w-80'>
            <div className='bg-white m-6'>
            
            <h2 className='text-lg font-semibold py-3'>Credit Hour Remaining 7 hr</h2>
            <hr></hr>
            <h2 className='text-lg font-semibold py-3'>Course Name</h2>
            <ol>
                <li>Introduction to C Programming</li>
                <li>Introduction to C Programming</li>
                <li>Introduction to C Programming</li>
            </ol>
            <hr></hr>
            <h3>Total Credit Hour: 7</h3>
            <hr></hr>
            <h2>Total Price: 48000 USD</h2>            
           
            </div>
        </div>
    );
};

export default Cart;