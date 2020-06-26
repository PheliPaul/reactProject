import React from 'react';
import '../AddCourse/Course1.css';


const Course1 =(props) => {
   console.log(props.history);
   //props.history.push('/co');
   
    return(
        
      <div className="tooltip">
          <div>Welcome to new Course</div>
         
      </div>
    );

};


export default Course1;