import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import Course1 from './AddCourse/Course1';

const PageOne=()=>{
    return(
        <div>Page1 welcomes yoy</div>
    );

};


const PageTwo=()=>{
    return(
        <div>huop</div>
    );

};

const TrialApp=()=>{
    return(
        <div>Page render
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/B" exact component={PageTwo} />
                </div>
            
            </BrowserRouter>

        </div>
        
    );

};


export default TrialApp;