import Course from './components/courses/course'
import './App.css'

function App() {
  

  return (
    <div className='bg-gray-400 '>      
      <h1 className="text-3xl text-center font-extrabold  py-8">Course Registration</h1>

      <div class='flex'>        
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
