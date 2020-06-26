import React from 'react';
import ReactDOM from 'react-dom';
import '../src/Pages/index.css' ; // './index.css';
import App from '../src/Pages/MainPage';
/*import Header from '../src/Component/Header/index';
//import Body from '../src/Component/Body/index';
//import App from './App';<Body/>

//import TrialApp from './TrialApp';

import './Component/Body/index.css';
import Menu from './Component/Menu/index' ;       
import Author from './Component/Author/index';
import Bio from './Component/Bio/index';
import TwoOption from './Component/TwoOption/index';
import LeftMenu from './Component/LeftMenu/index';
import Final from './Component/Final/index';
import BlueMark from './Component/BlueMark/index';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Course1 from '../src/AddCourse/Course1';
//import TrialApp from './TrialApp';
//import {Redirect} from 'react-router-dom'; <Redirect from="/" to="/co" />
//import {browserHistory} from 'react-router';
//import { useHistory } from 'react-router-dom'
const Course= () =>{
  //e.preventDefault();
  //console.log(props.history);
  console.log("hola");
  return(
    
    
   <Course1/>
      
    
  );
} 


const App = () =>{
    return (

      <BrowserRouter>
      <Switch>
      <div className="full-page">
             <Route path="/" exact component={Header} />  
            <div className="bbody">
                <Route path="/" exact component={LeftMenu} /> 
                <div className="bbody-right">
                    <Route path="/" exact component={Menu} />
                      <Route path="/" exact component={BlueMark} />
                      <Route path="/" exact component={Author} />
                      <Route path="/" exact component={Bio} />
                      <Route path="/" exact component={TwoOption} ></Route>
                      <Route path="/coo" exact render={props =><Course1{...props} />} ></Route>
                      <Route path="/" exact component={ Final} />
             </div>  
           </div> 


    </div>
    </Switch>
</BrowserRouter>
        
    );

};
export default Course;*/

ReactDOM.render( <App/>, document.querySelector('#root'));


// <TrialApp />render={props =><Course1{...props}
      // <div>browserHistory.push('./l')<Link to="/k">majkol jnj</Link></div>

/*  <Route path="/" exact render={props =><TwoOption{...props} />} ></Route>
<div className="full-page">
     

        <Header />  
        
        <div className="bbody">
           <LeftMenu /> 
           <div className="bbody-right">
               <Menu />
               <BlueMark />
               <Author />
             
               <Bio />
              
               <BrowserRouter>
                    <div>
                      <Route path="/" exact component={TwoOption}/>
                      <Route path="/co" exact component={Course1}/>
                    </div>
                 </BrowserRouter>
               
               <Final />
             </div>  
           </div> 


    </div>











*/