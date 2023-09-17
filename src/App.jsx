import { useEffect, useState } from 'react';
import Course from './components/courses/course'
import Cart from './components/cart/Cart'
import './App.css'

 function App() {



  useEffect( () => { 
    fetch('./Courses.json')
    .then(res => res.json())
    .then(data => setCourses(data))
    }, [])

    const [courses, setCourses] = useState([])
    console.log(courses);
    console.log(setCourses.length);
    
  return (
    <div className='bg-gray-400 '> 

      <h1 className="text-3xl text-center font-extrabold  py-8">Course Registration</h1>

      <div className='flex'>        
      <div className='grid grid-cols-3 gap-6'> 
      {courses.map( course => <Course key={course.img} course={course}></Course>)}        
      </div>      

      <div className='grid gap-6'>
       <Cart> </Cart>
      </div>
      </div> 

    </div>
  )
  }

  export default App;