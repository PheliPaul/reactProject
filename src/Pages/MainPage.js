import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import Header from   '../Component/Header/index' ;//  '../Component/Header/index';
import  '../Component/Body/index.css' ;                     //'./Component/Body/index.css';
import Menu from   '../Component/Menu/index'  ;       
import Author from '../Component/Author/index';
import Bio from '../Component/Bio/index';
import TwoOption from '../Component/TwoOption/index';
import LeftMenu from '../Component/LeftMenu/index';
import Final from '../Component/Final/index';
import BlueMark from '../Component/BlueMark/index';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Course1 from '../AddCourse/Course1';
//import {dropDown ,Header}from '../Component/Header/index';
//import DropDown from '../ToolTip';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <div className="full-page">
             <Route path="/" exact component={Header}></Route>  
             
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
}

export default App;
