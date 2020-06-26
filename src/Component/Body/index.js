import React from 'react';
/* import './index.css'; */
import './index.css';
import Menu from '../Menu/index';
import Author from '../Author/index';
import Bio from '../Bio/index';
import TwoOption from '../TwoOption/index';
import LeftMenu from '../LeftMenu/index';
import Final from '../Final/index';
import BlueMark from '../BlueMark/index';


const Body =() =>{
    return(
        <div className="bbody">
           <LeftMenu /> 
           <div className="bbody-right">
               <Menu />
               <BlueMark />
               <Author />
             
               <Bio />
               <TwoOption />
               <Final />
             </div>  
           </div>
        
    );

}

export default Body;
/*<div className="left-right-adjustment">  */