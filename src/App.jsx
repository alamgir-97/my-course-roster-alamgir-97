import { useEffect, useState } from 'react';
import Course from './components/courses/course'
import Cart from './components/cart/Cart'
import './App.css'

 function App() {
  const [courses, setCourses] = useState([])   
    // console.log(courses);
    // console.log(setCourses.length); 
  useEffect( () => { 
    fetch('./Courses.json')
    .then(res => res.json())
    .then(data => setCourses(data))
    }, [])
       
   

    const [selectedCourses, setSelectedCourses] = useState([]);
    //, coursePrice, credit, remainingCredit
    const handleSelectBtn = (course ) => { 
      let coursePrice = course.price;
      let credit = course.credit;
      // let remainingCredit = 20;            
      
      const isExist = selectedCourses.find(item => item.course_name == course.course_name);
      //console.log(isExist);
      if(isExist){
        return alert("already selected")
        }
      else {
      selectedCourses.forEach(item =>{
        coursePrice = parseFloat(coursePrice) + parseFloat(item.price);
    console.log(coursePrice)        
        credit = parseFloat(credit) + parseFloat(item.credit);
    console.log("Credit:" + credit)
    //     remainingCredit = parseFloat(remainingCredit)-parseFloat(credit);
    // console.log(remainingCredit);
        // if(remainingCredit<0){
        //   return alert("Your remaining credit must be between 0 and 20")
        // }
        // else {
        //   remainingCredit;
        // }
      })
      setSelectedCourses([...selectedCourses, course]);
    }
      console.log(isExist);
    }

   
    

  return (
    <div className='bg-gray-400 '> 

      <h1 className="text-3xl text-center font-extrabold  py-8">Course Registration</h1>

      <div className='flex'>        
      <div className='grid grid-cols-3 gap-6'> 
      {courses.map( course => <Course onClick={()=>handleSelectBtn(course)} key={course.img} course={course}></Course>)}        
      </div>      

      <div className='grid gap-6'>
       
       <Cart selectedCourses={selectedCourses}  > </Cart>
      </div>
      </div> 

    </div>
  )
  }

  export default App;