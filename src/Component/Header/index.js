import React, { useState , useEffect} from 'react';
import './index.css';
import { MdTextsms } from 'react-icons/md';
import { MdNotifications } from 'react-icons/md';
import { FaUserAlt } from "react-icons/fa";
import gama from '../../AssetsImage/gama.png';
import { FaAngleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GoX } from "react-icons/go";
//import Course1 from '../../AddCourse/Course1';
import ReactTooltip from 'react-tooltip';
//import ModalLogout from "./ModalLogout";
import Modal from 'react-modal';
//import { Select } from 'semantic-ui-react';
import DropDown from "../../ToolTip";

 /*const dropDown =()=>{
   
    console.log("kikos")
      return <DropDown/>
        
     
};   */

 const Header =() =>{
    const [show,setShow] = useState(false);
    const [showExit,setShowExit] = useState(false);
    const [change,setChange] =useState('Courses');
   // const [view,setView] =useState(false);
   //const[showDropDown,setShowDropDown]=useState(false);
   //console.log(course);
   const selectedOption = (item)=>{
    setChange(item);
    setShow(false);
  };
    
    return(
        <div className="header">
            <div className="logo"><img src={gama} alt="logo"/></div>
            <div className="search">
            <span className="search-small" >
                  <span id="nicon" onClick={()=>setShow(true)}><FaAngleDown/></span>
                  <span id="nname">{change}</span>
            {show && <div className="second">
   < div className="option" onClick={()=>{selectedOption("long term course")}}> long term Course</div>
   < div className="option" onClick={()=>{selectedOption("short term")}}>short term Course</div>
   <div className="option" onClick={()=>{selectedOption("Daily Course")}}>Daily Course</div>
   <div className="option" onClick={()=>{selectedOption("Quarterly Course")}}>Quarterly Course</div>
   <div className="option" onClick={()=>{selectedOption("weekly Course")}}>weekly Course</div>
  </div>}
  </span>


           {/* <select className="search-small" id="abg" name="op">   
               {true && <div>
               <option value="" disabled hidden selected >Course</option>                      
                <option  value="Long Term Course" >Long Term Course</option>
                <option  value="Short Term Course">Short Term Course</option>
                <option value="Monthly Course">Monthly Course</option>
                <option value="Quarterly Course">Quarterly Course</option>
                <option value="Daily Course">Daily Course</option>
                </div>  }
        
               </select>   */}
                            
          
                       
                        <form className="search-big">
                            <FaSearch span id="micon"/>
                            <input id="mname" placeholder="Find a subject, courses, group..."></input>
                        </form>
                        
            </div>
            <div className="right-header">
                        <div className="message"><MdTextsms /></div>
                        <div className="bell"><MdNotifications /></div>
                        <div className="profile" data-tip data-for="profile"  onClick={()=>setShowExit(true)} ><FaUserAlt /></div>
                        <ReactTooltip id="profile">Click On Me To Logout</ReactTooltip>
                                    
             </div>   
                   <Modal className="lets_try" isOpen={showExit} onRequestClose={()=>setShowExit(false)} style={{overlay:{backgroundColor:"rgba(0,0,0,.7)"}}}>
                       <div className="exit" onClick={()=>setShowExit(false)}><GoX/></div>
                        <div className="logout_text">
                            
                            <h1>Do you want to logout?</h1>
                            <div className="logout_option">
                                <button>Yes</button>
                                <button>No</button>
                            </div>
                          
                        </div>
            </Modal>  
                         
        </div>

       
    )
};

/*const LogOut= (p) =>{
    console.log(p);
    
    return (
    <div>
       
       hio
    </div>);
} */


export default Header;



/*<img src={gama} alt="logo"/>

<FaSearch span id="micon"/><span id="mname"></span>


 <ReactTooltip className="logout" id="profile" clickable="true"><div><div className="logout_text">do you want to log out?</div><div className="logout_option"><button>yes?</button><button>no?</button></div></div></ReactTooltip>
 onSelect={()=>setCourse('Short Term Course')}
 <ModalLogout x="show"/>
<button className="close_model_button" onClick={()=>setShow(false)}>close</button>



{showDropDown && <div className="ffromm">
        <select id="abg" name="op">         
            <option value="Long Term Course" onSelect={()=>setCourse('Long Term Course')}>Long Term Course</option>
            <option value="Short Term Course"onSelect={()=>setCourse('Short Term Course')}>Short Term Course</option>
            <option value="Monthly Course">Monthly Course</option>
            <option value="Quarterly Course">Quarterly Course</option>
            <option value="Daily Course">Daily Course</option>
        </select>
    </div> }








 <Modal className="fformm">
        <select>
                        
            <option>Long Term Course</option>
            <option>Short Term Course</option>
            <option>Monthly Course</option>
            <option>Quaterly Course</option>
            <option>Daily Course</option>
            </select>

            </Modal>



 {showDropDown && <div className="ffromm">
        <ul id="abg" name="op">         
            <li value="Long Term Course" onSelect={()=>setCourse('Long Term Course')}>Long Term Course</li>
            <li value="Short Term Course"onSelect={()=>setCourse('Short Term Course')}>Short Term Course</li>
            <li value="Monthly Course">Monthly Course</li>
            <li value="Quarterly Course">Quarterly Course</li>
            <li value="Daily Course">Daily Course</li>
        </ul>
    </div> }            


 {showDropDown && <div>
        <ul  className="ffromm">         
            <li value="Long Term Course" onSelect={()=>setCourse('Long Term Course')}>Long Term Course</li>
            <li value="Short Term Course"onSelect={()=>setCourse('Short Term Course')}>Short Term Course</li>
            <li value="Monthly Course">Monthly Course</li>
            <li value="Quarterly Course">Quarterly Course</li>
            <li value="Daily Course">Daily Course</li>
        </ul>
    </div> }

<button className="search-small">
    <span  id="nicon" onClick={()=>setShowDropDown(true)}><FaAngleDown /> </span>
                            <span id="nname">{course}</span>



                            
 */