import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
//import Course1 from '../../AddCourse/Course1';
      // browserHistory.push('/N')


//import Course from '../../AddCourse/Course1';<button onClick={AddNew}>+ ADD NEW COURSE</button> <Link to='/coo'>+ ADD NEW COURSE </Link>
/*const AddNew= () =>{
    console.log("clicked");
   return( <a href='/coo' target='_blank'/>);
}; 
onClick={()=>navigate()}*/
/*const navigate =() =>{
    window.location.href="/pos";
}*/


const TwoOption= (props) => {
    console.log(props);
    return(
      
        <div className="forth-block">
            <div className="name-right">Courses</div>
            <button onClick={() => props.history.push('/coo')}> + ADD NEW COURSE</button>
            
            
        </div>
    );
}


export default TwoOption;

/*  <div className="button"><button>+ ADD NEW COURSE</button></div> 

<Link to="/NewCourse"></Link><button> + ADD NEW COURSE </button>  Route

<Route path="/NewCourse"  exact component={AddNew} />


<BrowserRouter> 
                <div> 
                  <Route path="/N"  exact component={AddNew}/>
                 
                </div>
            </BrowserRouter>

*/