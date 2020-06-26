import React from 'react';
import './index.css';
import { GiByzantinTemple } from "react-icons/gi";
import { GrScorecard } from "react-icons/gr";
import { FaRegCompass } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { GoCalendar } from "react-icons/go";
//import {IconContext} from "react-icons";

const LeftMenu = () =>{
    return(
    
        <nav className="bbody-left">
           <div className="left-gap">  
                <nav className="separation">
                    <a href="www.uio" className= "icon-left"><GiByzantinTemple/></a>
                    <a className= "gap" href="www.uio">Home</a>
                </nav>
                <nav className="separation">
                    <a href="www.uio"  id="myCoursesIcon"><GrScorecard/></a>
                    <a  href="www.uio" id="myCoursesName">My Courses</a>
                </nav>
                <nav className="separation">
                    <a href="www.uio" className= "icon-left"><FaRegCompass/></a>
                    <a className= "gap" href="www.uio">Paths</a>
                </nav>
                <nav className="separation">
                    <a href="www.uio" className= "icon-left"><IoIosPeople/></a>
                    <a className= "gap" href="www.uio">Community</a>
                </nav>
                <nav  className="separation">
                    <a href="www.uio" className= "icon-left"><GoCalendar/></a>
                    <a className= "gap" href="www.uio">Calendar</a>
                </nav>
            </div>  
       </nav> 
   
    );

}

export default LeftMenu;