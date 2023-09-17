import { useEffect, useState } from 'react';
import Course from './components/courses/course'
import './App.css'

function App() {

  const [courses, setCourses] = useState([]);

  useEffect( () => { 
    fetch('./Courses.json')
    .then(res=> res.json())
    .then(data=>setCourses(data))
    },[])
    console.log(courses);
    console.log(setCourses.length);


  

  return (
    <div className='bg-gray-400 '>      
      <h1 className="text-3xl text-center font-extrabold  py-8">Course Registration</h1>

      <div className='flex'>        
      <div className='grid grid-cols-3 gap-6'> 
        <Course></Course>   
        <Course></Course>   
        <Course></Course>  
      </div>      

      <div className='grid gap-6'>
        <Course></Course> 
      </div>
      </div> 

    </div>
  )
}

export default App
